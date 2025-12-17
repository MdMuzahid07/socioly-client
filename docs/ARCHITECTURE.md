
# Socioly Architecture Documentation

## Overview
Socioly is a modern specific social media application built with **Next.js 16**, **React 19**, and **Redux Toolkit**. It focuses on performance, scalability, and a premium user experience.

## Tech Stack
*   **Framework**: Next.js 16 (App Router)
*   **Language**: TypeScript
*   **State Management**: Redux Toolkit (Gloabl Store) + RTK Query (Data Fetching)
*   **Styling**: Tailwind CSS + NextUI
*   **Icons**: Lucide React
*   **PWA**: @ducanh2912/next-pwa

## Architecture Pattern
The application follows a **Vertical Slice Architecture** combined with Feature-Sliced Design principles, optimized for Next.js.

### 1. Store (State Management)
We use a **Redux First** approach for global state.
*   `src/lib/store`: Contains the Redux store configuration.
*   `src/lib/store/features/api`: Contains the `apiSlice` defined with RTK Query. This handles all data fetching, caching, and synchronization.
*   `src/lib/store/features/auth`: Manages user session and authentication state.

### 2. Data Flow
1.  **Component** requests data via a custom hook (e.g., `useGetFeedQuery`).
2.  **RTK Query** checks the cache. If missing/stale, it executes the `queryFn`.
3.  **Mock Data Module** (`src/lib/data`) returns simulated network responses.
4.  **UI** updates automatically based on `isLoading`, `data`, or `error` states.

### 3. Directory Structure
```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── feed/         # Feed-specific components
│   ├── ui/           # Reusable UI kit (Buttons, Cards)
│   └── ...
├── lib/              # Core libraries and utilities
│   ├── data/         # Centralized Mock Data
│   ├── store/        # Redux Store & Slices
│   └── providers/    # Global Context Providers
├── types/            # TypeScript interfaces
└── styles/           # Global CSS and Tailwind config
```
