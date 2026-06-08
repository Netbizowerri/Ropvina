# Vercel Labs Agent Skills - React 19 Best Practices

This document outlines the elite coding best practices for development in React 19 and Tailwind CSS.

## 1. File Structure & Concern Separation
- Keep components modular. Do not load all logic into `App.tsx`.
- Create `/src/components`, `/src/context`, and `/src/pages` directories.
- Move any complex types to `/src/types.ts`.

## 2. React 19 State Management
- Utilize functional components, React Hooks (`useState`, `useReducer`, `useEffect`, `useContext`, `useCallback`, `useMemo`).
- Standardize on `useReducer` for complex state transitions in global state.
- Ensure that `useEffect` dependency arrays only contain primitive values to prevent infinite re-renders.

## 3. Class Components Constraint
- Never use class components. Always default to modern React 19 Functional Components.

## 4. Performance & Memoization
- Wrap expensive computation in `useMemo`.
- Use stable callbacks via `useCallback` when passing down to deep interactive children components.
