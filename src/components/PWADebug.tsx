"use client";

import { useEffect, useState } from "react";

export default function PWADebug() {
  const [debugInfo, setDebugInfo] = useState<any>(null);

  useEffect(() => {
    const checkPWAStatus = async () => {
      const info: any = {
        isInstalled: false,
        isStandalone: false,
        hasServiceWorker: false,
        hasManifest: false,
        manifestValid: false,
        installPromptAvailable: false,
        icons: [],
        errors: [],
      };

      // Check if installed
      info.isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as any).standalone === true;
      info.isInstalled = info.isStandalone;

      // Check service worker
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration();
          info.hasServiceWorker = !!registration;
          if (registration) {
            info.serviceWorkerScope = registration.scope;
            info.serviceWorkerState = registration.active?.state;
          }
        } catch (e) {
          info.errors.push(`Service Worker check failed: ${e}`);
        }
      } else {
        info.errors.push("Service Worker not supported");
      }

      // Check manifest
      try {
        const manifestResponse = await fetch("/manifest.json");
        if (manifestResponse.ok) {
          info.hasManifest = true;
          const manifest = await manifestResponse.json();
          info.manifestValid = !!(
            manifest.name &&
            manifest.short_name &&
            manifest.icons &&
            manifest.icons.length > 0
          );
          info.icons = manifest.icons || [];
        } else {
          info.errors.push(`Manifest not found: ${manifestResponse.status}`);
        }
      } catch (e) {
        info.errors.push(`Manifest check failed: ${e}`);
      }

      // Check install prompt
      info.installPromptAvailable = "onbeforeinstallprompt" in window;

      setDebugInfo(info);
    };

    checkPWAStatus();
  }, []);

  if (!debugInfo) {
    return (
      <div className="fixed bottom-4 left-4 z-50 max-w-md rounded-lg bg-gray-900 p-4 text-xs text-white">
        <p>Loading PWA debug info...</p>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md rounded-lg bg-gray-900 p-4 font-mono text-xs text-white">
      <h3 className="mb-2 font-bold text-yellow-400">PWA Debug Info</h3>
      <div className="space-y-1">
        <div>
          Installed:{" "}
          <span
            className={
              debugInfo.isInstalled ? "text-green-400" : "text-red-400"
            }
          >
            {debugInfo.isInstalled ? "Yes" : "No"}
          </span>
        </div>
        <div>
          Service Worker:{" "}
          <span
            className={
              debugInfo.hasServiceWorker ? "text-green-400" : "text-red-400"
            }
          >
            {debugInfo.hasServiceWorker ? "Registered" : "Not Registered"}
          </span>
        </div>
        <div>
          Manifest:{" "}
          <span
            className={
              debugInfo.hasManifest ? "text-green-400" : "text-red-400"
            }
          >
            {debugInfo.hasManifest ? "Found" : "Not Found"}
          </span>
        </div>
        <div>
          Manifest Valid:{" "}
          <span
            className={
              debugInfo.manifestValid ? "text-green-400" : "text-red-400"
            }
          >
            {debugInfo.manifestValid ? "Yes" : "No"}
          </span>
        </div>
        <div>
          Icons:{" "}
          <span
            className={
              debugInfo.icons.length > 0 ? "text-green-400" : "text-red-400"
            }
          >
            {debugInfo.icons.length} found
          </span>
        </div>
        <div>
          Install Prompt:{" "}
          <span
            className={
              debugInfo.installPromptAvailable
                ? "text-green-400"
                : "text-yellow-400"
            }
          >
            {debugInfo.installPromptAvailable ? "Available" : "Not Available"}
          </span>
        </div>
        {debugInfo.errors.length > 0 && (
          <div className="mt-2 border-t border-gray-700 pt-2">
            <div className="font-bold text-red-400">Errors:</div>
            {debugInfo.errors.map((error: string, i: number) => (
              <div key={i} className="text-red-300">
                • {error}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
