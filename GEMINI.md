# Project Overview

This is a monorepo for Horizon Render, a web application built with Next.js, React, and Emotion. The repository is structured using pnpm workspaces, with separate packages for the web app, UI components, design tokens, and hooks. Storybook is used for developing and showcasing UI components.

## Key Technologies

*   **Framework:** Next.js
*   **UI:** React, Emotion, Storybook
*   **Language:** TypeScript
*   **Package Manager:** pnpm
*   **Linting & Formatting:** Biome
*   **Testing:** Vitest

# Building and Running

## Development

To start the development server for all packages and applications, run:

```bash
pnpm dev
```

To run a specific application or package, use the `--filter` flag:

*   **Web App:** `pnpm --filter web dev`
*   **Storybook:** `pnpm --filter @horizon/storybook dev`

## Building

To build all packages and applications, run:

```bash
pnpm build
```

## Testing

To run tests for all packages, run:

```bash
pnpm test
```

# Development Conventions

## Linting and Formatting

This project uses Biome for linting and formatting. To check for issues, run:

```bash
pnpm lint
```

To automatically fix issues, run:

```bash
pnpm lint:fix
```

## Commit Messages

This project follows a conventional commit message format. Please refer to the `README.md` file for the commit type guide.
