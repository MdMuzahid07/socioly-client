"use client";

import { Download, X } from "lucide-react";
import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const [showAlwaysVisible, setShowAlwaysVisible] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as Navigator & { standalone?: boolean })
          .standalone === true;
      setIsInstalled(isStandalone);
      return isStandalone;
    };

    if (checkInstalled()) {
      return;
    }

    // Check if user has dismissed the prompt before
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (dismissed) {
      const dismissedTime = parseInt(dismissed, 10);
      const daysSinceDismissed =
        (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      // Show again after 7 days
      if (daysSinceDismissed < 7) {
        return;
      }
    }

    // Check if service worker is registered (required for install prompt)
    const checkServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration();
          if (!registration) {
            console.warn(
              "PWA: Service worker not registered. Install prompt may not appear.",
            );
            return false;
          }
          return true;
        } catch (e) {
          console.error("PWA: Error checking service worker:", e);
          return false;
        }
      }
      return false;
    };

    // Check if manifest is valid
    const checkManifest = async () => {
      try {
        const response = await fetch("/manifest.json");
        if (!response.ok) {
          console.warn("PWA: Manifest not found or invalid");
          return false;
        }
        const manifest = await response.json();
        if (!manifest.icons || manifest.icons.length === 0) {
          console.warn("PWA: Manifest missing icons");
          return false;
        }
        return true;
      } catch (e) {
        console.error("PWA: Error checking manifest:", e);
        return false;
      }
    };

    // Initialize checks
    const init = async () => {
      const hasSW = await checkServiceWorker();
      const hasManifest = await checkManifest();

      if (!hasSW || !hasManifest) {
        console.warn("PWA: Install prompt requirements not met");
        return;
      }

      setCanInstall(true);
    };

    init();

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      // Install prompt event received - will show UI after delay

      // Show prompt after a delay to not interrupt user experience
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    // Listen for install prompt event
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Also check periodically if prompt becomes available
    const checkInterval = setInterval(() => {
      if (!deferredPrompt && canInstall) {
        // Re-check if we can show manual install button
        checkInstalled();
      }
    }, 5000);

    // Show always-visible install button after delay if conditions are met
    const showTimer = setTimeout(() => {
      if (!isInstalled && canInstall && !deferredPrompt) {
        setShowAlwaysVisible(true);
      }
    }, 5000);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      clearInterval(checkInterval);
      clearTimeout(showTimer);
    };
  }, [deferredPrompt, canInstall, isInstalled]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setShowPrompt(false);
      setDeferredPrompt(null);
      localStorage.removeItem("pwa-install-dismissed");
    } else {
      handleDismiss();
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-install-dismissed", Date.now().toString());
  };

  // Show manual install button if prompt is not available but app is installable
  const showManualInstall =
    canInstall && !deferredPrompt && !isInstalled && !showPrompt;

  if (isInstalled) {
    return null;
  }

  // If we have the prompt event, show the custom prompt
  if (showPrompt && deferredPrompt) {
    return (
      <div className="animate-in slide-in-from-bottom-5 fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96">
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black dark:bg-white">
                <Download className="h-6 w-6 text-white dark:text-black" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                Install Socioly
              </h3>
              <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
                Install our app for a better experience with offline support and
                faster access.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleInstallClick}
                  className="flex-1 rounded-md bg-black px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Install
                </button>
                <button
                  onClick={handleDismiss}
                  className="px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Not now
                </button>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show manual install instructions if browser doesn't support beforeinstallprompt
  if (showManualInstall) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <Download className="mt-0.5 h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 text-sm font-semibold text-blue-900 dark:text-blue-100">
                Install Socioly
              </h3>
              <p className="mb-2 text-xs text-blue-700 dark:text-blue-300">
                Look for the install icon in your browser&apos;s address bar, or
                use the browser menu to install this app.
              </p>
              <button
                onClick={handleDismiss}
                className="text-xs text-blue-600 hover:underline dark:text-blue-400"
              >
                Dismiss
              </button>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-blue-400 transition-colors hover:text-blue-600 dark:hover:text-blue-300"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show always-visible install button if app is installable (even without prompt event)
  // This helps users find the install option
  if (
    showAlwaysVisible &&
    !isInstalled &&
    canInstall &&
    !showPrompt &&
    !deferredPrompt
  ) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => {
            // Try to trigger browser's install menu
            alert(
              "To install this app:\n\n" +
                "Chrome/Edge: Click the install icon (➕) in the address bar, or go to Menu (⋮) > Install Socioly\n\n" +
                "Firefox: Menu (☰) > Install\n\n" +
                "Safari iOS: Share button > Add to Home Screen",
            );
          }}
          className="flex items-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          title="Install Socioly App"
        >
          <Download className="h-5 w-5" />
          <span>Install App</span>
        </button>
      </div>
    );
  }

  return null;
}
