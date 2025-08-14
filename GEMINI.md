# Project: horizon-render

## 1. Project Overview

This is a pnpm monorepo for a TypeScript project named "horizon-render". The project is in its early stages and appears to be a modern frontend project using React. The monorepo is structured with `apps` for deployable applications and `packages` for shared libraries, with a clear focus on a design system architecture (`tokens` and `ui` packages).

**Key Technologies:**

*   **Package Manager:** pnpm
*   **Language:** TypeScript
*   **UI Framework:** React
*   **Build Tools:** Vite (studio), NextJS (web)
*   **Editor:** React Flow (visual workflow editor)
*   **Styling:** Tailwind CSS
*   **Component Library:** Storybook
*   **Form Management:** React Hook Form + Zod
*   **Schema Validation:** Zod
*   **Testing:** Vitest + @testing-library/react
*   **Testing:** Vitest + @testing-library/react
*   **Linter/Formatter:** Biome

## 2. Project Structure

The monorepo is organized into three main areas: `apps`, `packages`, and `configs`.

*   `apps/`: Contains the applications.
    *   `studio`: React Flow based visual editor application (React + Vite).
    *   `web`: Main web application (NextJS).
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

*   The `apps/studio` is a React Flow editor application with Vite configuration. The `apps/web` is a NextJS application.
*   The `@horizon/tokens` and `@horizon/ui` packages are implemented and provide design system foundation.
*   The `tsconfig.json` includes path aliases (`@horizon/ui`, `@horizon/tokens`) for easier imports between packages.

**Potential Next Steps:**

1.  **Develop Studio Editor:** Implement React Flow editor features in the `apps/studio` application.
2.  **Extend UI Components:** Add more UI components in the `@horizon/ui` package as needed for the editor.
3.  **API Integration:** Set up shared API client for both studio and web applications.
4.  **Develop NextJS Web App:** Implement NextJS application with SSR/API Routes consuming the component library.

## 4. Building and Running

### Development

To start the development servers for all packages in parallel, run:

```bash
pnpm dev
```

To run the studio app (React Flow editor):

```bash
pnpm studio
```

To run the web app (NextJS):

```bash
pnpm web
```

### Build

To build all packages and applications, run:

```bash
pnpm build
```

Individual app builds:

```bash
pnpm build-studio          # Build studio app (Vite)
pnpm --filter web build    # Build NextJS app
```

### Testing

To run tests for all packages and applications, run:

```bash
pnpm test
```

**Testing Strategy:**
*   **Component Tests:** UI package components with Vitest + jsdom
*   **NextJS Tests:** API routes and pages with Vitest
*   **Studio Tests:** React Flow editor business logic (avoid canvas testing)
*   **Visual Testing:** Storybook stories for component documentation

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
