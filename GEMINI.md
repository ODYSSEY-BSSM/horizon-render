# Project: horizon-render

## 1. Project Overview

This is a pnpm monorepo for a TypeScript project named "horizon-render". The project is in its early stages and appears to be a modern frontend project using React. The monorepo is structured with `apps` for deployable applications and `packages` for shared libraries, with a clear focus on a design system architecture (`tokens` and `ui` packages).

**Key Technologies:**

*   **Package Manager:** pnpm
*   **Language:** TypeScript
*   **UI Framework:** React
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Component Library:** Storybook
*   **Testing:** Vitest
*   **Linter/Formatter:** Biome

## 2. Project Structure

The monorepo is organized into three main areas: `apps`, `packages`, and `configs`.

*   `apps/`: Contains the applications.
    *   `studio`: A Storybook or design system studio application (currently not configured).
    *   `web`: A web application (currently not configured).
*   `packages/`: Contains shared packages intended to form a design system.
    *   `@horizon/tokens`: A package for design tokens. The entry point `src/index.ts` is currently empty.
    *   `@horizon/ui`: A package for UI components. The entry point `src/index.ts` is currently empty.
*   `configs/`: Contains shared configuration files for maintaining consistency across the monorepo.
    *   `tailwind/base.config.js`: A base configuration for Tailwind CSS.
    *   `vite/base.config.ts`: A factory function to create shared Vite configurations for libraries.
    *   `vitest/base.config.ts`: A base configuration for the Vitest testing framework.

## 3. Current Status & Next Steps

The project is in the **initial setup phase**. The foundational structure, dependencies, and build/development scripts are in place, but no functional code has been written yet.

**Key Observations:**

*   The `apps/studio` and `apps/web` workspaces are placeholders and lack specific build or development configurations.
*   The `@horizon/tokens` and `@horizon/ui` packages are empty and need to be implemented.
*   The `tsconfig.json` includes path aliases (`@horizon/ui`, `@horizon/tokens`) for easier imports between packages.

**Potential Next Steps:**

1.  **Define Design Tokens:** Populate the `@horizon/tokens` package with foundational design values (colors, spacing, typography, etc.).
2.  **Implement UI Components:** Start building base UI components (e.g., Button, Input) in the `@horizon/ui` package, consuming tokens from `@horizon/tokens`.
3.  **Configure Storybook:** Set up Storybook in the `apps/studio` workspace to visualize and test the UI components from `@horizon/ui`.
4.  **Develop Applications:** Configure the `apps/web` application to consume the component library and build out features.

## 4. Building and Running

### Development

To start the development servers (e.g., `tsc --watch`) for all packages in parallel, run:

```bash
pnpm dev
```

### Build

To build all packages and applications, run:

```bash
pnpm build
```

### Testing

To run tests for all packages and applications, run:

```bash
pnpm test
```

### Storybook

To run Storybook, use the following commands:

```bash
# Start the Storybook development server
pnpm storybook

# Build Storybook for deployment
pnpm build-storybook
```

## 5. Development Conventions

### Linting and Formatting

This project uses Biome for linting and formatting.

```bash
# Check for linting errors
pnpm lint

# Fix linting and formatting errors
pnpm lint:fix
```

### Type Checking

To check for TypeScript errors, run:

```bash
pnpm typecheck
```

### Commit Messages

This project follows a conventional commit message format. Please refer to the `README.md` for the commit type guide.
