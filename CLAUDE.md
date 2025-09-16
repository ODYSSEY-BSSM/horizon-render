# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Horizon Render** is a TypeScript monorepo managed with pnpm workspaces. It contains a Next.js web app, a UI component library built with Emotion, a tokens package, and utilities. Storybook is used for component development.

## Key Technologies

- **Framework**: Next.js
- **UI**: React, Emotion, Storybook
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Lint/Format**: Biome
- **Testing**: Vitest

## Essential Commands

```bash
# Development
pnpm dev                      # Start all packages in parallel watch mode
pnpm --filter web dev         # Run web app (Next.js)
pnpm --filter @horizon/storybook dev  # Run Storybook
pnpm editor                   # Run editor app (React + Vite)

# Code Quality (run before commits)
pnpm lint                     # Biome linting
pnpm lint:fix                 # Autofix linting/formatting
pnpm typecheck                # TS type checking across workspace
pnpm verify                   # lint + typecheck + test + build

# Build & Test
pnpm build                    # Build all packages and apps
pnpm test                     # Run tests (Vitest)
pnpm build-editor             # Build editor app
pnpm build-storybook          # Build Storybook (+ deps)
pnpm clean                    # Remove all dist and node_modules
```

## Monorepo Structure

### Packages / Apps
- **`@horizon/tokens`**: Design tokens (colors, typography, layout, icons)
- **`@horizon/ui`**: React components using Emotion
- **`@horizon/utils`**: Shared utilities and hooks
- **`apps/web`**: Next.js application
- **`apps/editor`**: Visual editor (React + Vite)
- **`apps/storybook`**: Storybook workspace

### Workspace Conventions
- Inter-package references use `workspace:*` in package.json
- Shared TypeScript/Vite/Vitest configs under `configs/`

## Development Patterns

### Component Development (UI package)
1. Implement component + variants with `@emotion/styled`
2. Export from `src/index.ts`
3. Build via `pnpm --filter @horizon/ui build` if needed

### App Development
- **Web App**: Next.js App Router; prefer Server Components; mark Client components with `'use client'` when using hooks/contexts or Emotion runtime requirements
- **Editor App**: Vite + React; consumes tokens and UI components

### Forms & Validation
- **Zod** for schemas and inference
- **React Hook Form** with `@hookform/resolvers/zod`

### Design Tokens
- Always source values from `@horizon/tokens` (see `src/colors.ts`, `src/typography.ts`, `src/layout.ts`, `src/icons.ts`)

### Code Quality
- Biome: 2-space indent, ~100 char line width, single quotes, semicolons
- Commits: Korean descriptions + conventional types (feat/fix/refactor/docs/build/ci/perf/test/chore/hotfix)
- TypeScript: strict mode; path aliases configured

## Build System
- **tsup** for libraries (ESM + CJS)
- **Vite** for editor
- **Next.js** for web (SSR/SSG/Streaming)
- Parallel development via pnpm workspaces

## Testing
- **Vitest** for unit tests
- **@testing-library/react** for component behavior in UI package

## Important Files
- `packages/tokens/src/*` — Design tokens
- `packages/ui/src/Text/*` — Reference component
- `biome.json` — Formatting rules
- Root `package.json` — Workspace scripts and deps
- `configs/` — Shared TS/Vite/Vitest configs
- `pnpm-workspace.yaml` — Workspace definitions