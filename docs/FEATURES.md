
# Socioly Features

## Core Features
1.  **News Feed**
    *   Infinite scroll-ready structure.
    *   Rich media support (images).
    *   Real-time like and comment counters (simulated).

2.  **User Profiles**
    *   Custom cover photo and avatar.
    *   Bio, work, and location details.
    *   Tabbed interface for Posts and Photos.

3.  **Authentication**
    *   Mock login/signup flows.
    *   Session persistence via simulated LocalStorage.

4.  **Dark Mode**
    *   System-aware dark mode preference.
    *   Seamless toggle with instant UI adaptation.

5.  **PWA (Progressive Web App)**
    *   Installable on mobile and desktop.
    *   Offline capabilities (manifest configured).

## Enterprise Capabilities
*   **Strict Typing**: 100% TypeScript coverage.
*   **Scalable Store**: Modular Redux slices.
*   **Optimistic Updates**: Immediate UI feedback for interactions.
*   **Component Composition**: Highly reusable UI library based on NextUI.

### UI System
*   **NextUI (HeroUI)**: Base component library (v2.6).
*   **SYForm System**: Custom wrapper around `react-hook-form` and NextUI.
    *   `SYForm`: Context provider.
    *   `SYInput`: Text inputs.
    *   `SYSelect`: Dropdowns with validation.
    *   `SYIconSelect`: Dropdowns with icons/avatars.
    *   `SYDatePicker`: Date selection (powered by internationalized/date).
    *   `SYTextArea`: Multiline text.
    *   `env.ts`: Strict environment configuration.
