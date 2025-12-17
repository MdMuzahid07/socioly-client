
# Socioly - Next.js Social Media Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Status](https://img.shields.io/badge/status-Production_Ready-success.svg)

**Socioly** is an enterprise-grade social media frontend application built with the latest web technologies. It is designed to be scalable, performant, and developer-friendly, featuring a modern UI and a robust state management system.

## 🚀 Teck Stack

*   **Core**: [Next.js 16](https://nextjs.org/), [React 19](https://react.dev/)
*   **State**: [Redux Toolkit](https://redux-toolkit.js.org/) & RTK Query
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/), [NextUI](https://nextui.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **PWA**: Next-PWA

## 📂 Documentation

Detailed documentation is available in the `docs/` directory:

*   [**Architecture Overview**](./docs/ARCHITECTURE.md): Learn about the directory structure and design patterns.
*   [**Features List**](./docs/FEATURES.md): Explore the capabilities of Socioly.

## 🛠️ Getting Started

### Prerequisites

*   Node.js 18+
*   Yarn or npm

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/socioly-client.git
    cd socioly-client
    ```

2.  **Install dependencies**:
    ```bash
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

To create a production build:

```bash
yarn build
yarn start
```

## 🧪 Architecture Highlights

*   **Redux-First**: All data fetching and global state is managed by Redux Toolkit to ensure predictability and ease of debugging.
*   **Mock Data Layer**: A sophisticated mock data layer (`src/lib/data`) simulates real-world API latency and response structures, allowing for frontend development without a backend dependency.
*   **Feature-Sliced**: components are organized by domain (Feed, Profile, Settings) for better maintainability.

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

Built with ❤️ by [Md. Muzahid](https://github.com/MdMuzahid07)
# socioly-client
