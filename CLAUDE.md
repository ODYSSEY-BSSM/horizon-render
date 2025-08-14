# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Horizon Render** is a React TypeScript design system monorepo built with pnpm. It's the "vol.2 restart" of Horizon FE project focused on creating a comprehensive component library with design tokens, Storybook documentation, and modern development tooling.

## Essential Commands

```bash
# Development
pnpm dev                    # Start all packages in parallel watch mode
pnpm studio                # Run studio app (React Flow editor)
pnpm web                   # Run web app (NextJS)
pnpm storybook             # Run Storybook for component development

# Code Quality (Always run before commits)
pnpm lint                  # Biome linting check
pnpm lint:fix              # Auto-fix linting and formatting
pnpm typecheck             # TypeScript type checking
pnpm verify                # Full pipeline: lint + typecheck + test + build

# Building & Testing  
pnpm build                 # Build all packages and apps
pnpm test                  # Run tests (Vitest + @testing-library/react)
pnpm build-studio          # Build studio app (React + Vite)
pnpm --filter web build    # Build NextJS app
```

## Architecture & Monorepo Structure

### Packages
- **`@horizon/tokens`**: Design system foundation - colors, typography, layout tokens, icon system
- **`@horizon/ui`**: React components using class-variance-authority pattern with Storybook documentation
- **`apps/studio`**: React Flow based visual editor (React + Vite)
- **`apps/web`**: Main web application (NextJS)

### Key Architectural Patterns

**Design Token System**: All design decisions centralized in `@horizon/tokens`, auto-integrated into Tailwind CSS via custom plugins. Components consume tokens, never hard-coded values.

**Component Architecture**: Follow the Text component pattern - variant-based with class-variance-authority, TypeScript-first, accessibility built-in. Components export both React component and Tailwind utilities.

**Workspace Dependencies**: Packages reference each other via `workspace:*` in package.json. Shared configs live in `/configs` directory.

### Tailwind Integration
Design tokens automatically become Tailwind utilities. Custom icon utilities generated from token config. Each package exports a Tailwind preset for consuming applications.

## Development Patterns

### Component Development
1. Start in `@horizon/ui` with component + variants using `cva()`
2. Create comprehensive Storybook stories 
3. Export component and any related utilities
4. Update package index.ts exports

### App Development
- **Studio App**: React Flow editor for visual workflows (React + Vite), uses `@horizon/ui` components and design tokens
- **Web App**: NextJS application with SSR/API Routes, consuming the design system

### React Flow Editor Patterns
- **Node Components**: Custom nodes extending base design system components
- **Business Logic**: Focus testing on data transforms and state management, not canvas interactions
- **State Management**: Editor state separate from React Flow internal state
- **API Integration**: Shared API client for data persistence (TBD)

### Form & Validation Patterns
- **Zod**: Schema validation for API responses and form data with TypeScript inference
- **React Hook Form**: Form state management with `@hookform/resolvers/zod` integration
- **Pattern**: Define schema once, use for both API validation and form validation

### Design Token Usage
Always reference tokens from `@horizon/tokens` - check `src/colors.ts`, `src/typography.ts`, `src/layout.ts`, `src/icons.ts` for available tokens before creating components.

### Code Quality Standards
- **Biome Configuration**: 2-space indent, 100 char line width, double quotes, semicolons
- **Commit Format**: Korean descriptions with conventional commit types (see README)
- **Pre-commit hooks**: lint-staged runs Biome on changed files
- **TypeScript**: Strict mode enabled, path aliases configured

### Build System
- **tsup** for library bundling (ESM + CommonJS)  
- **Vite** for studio app development and build
- **NextJS** for web app with SSR/SSG capabilities
- **Parallel development** via pnpm workspaces

## Testing Approach
**Vitest + @testing-library/react** for all testing:
- **Component Tests**: UI package components with jsdom
- **NextJS Tests**: API routes and pages with Vitest 
- **Studio Tests**: React Flow editor business logic (avoid canvas testing)
- **Visual Testing**: Storybook stories for component documentation

## Important Files to Check
- `packages/tokens/src/*` - Design system tokens
- `packages/ui/src/components/text/*` - Reference component implementation  
- `biome.json` - Code formatting rules
- Root `package.json` - Workspace scripts and dependencies
- `configs/` - Shared TypeScript/Vite/Vitest configurations