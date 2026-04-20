# Contributing

This project is an Angular 21 landing page template built around SSR prerendering, TailwindCSS v4, shared theme variables, and a minimal project structure.

Keep contributions aligned with the current template conventions described in [README.md](README.md).

## Core rules

- Use **Conventional Commits**: `type(scope): subject`
- Keep one commit focused on one logical change
- Use **OnPush** components by default
- Keep state used in HTML class bindings as **signals**
- Prefer **Angular Signal Forms** for new forms
- Prefer Angular signal-first APIs over older decorator-heavy patterns where practical
- Use the new Angular template control flow (`@if`, `@for`, `@switch`) in new code
- Keep new code SSR-safe; do not assume browser-only APIs exist during server rendering

## Styling

- Use **TailwindCSS first** for normal UI work
- Use shared theme variables from `src/styles/_theme.scss` for colors, surfaces, spacing, radius, motion, and typography
- Use component `.scss` files for local styling only when Tailwind is not the right tool
- Avoid hard-coded hex colors and random pixel values when a theme token already exists
- Keep styles compatible with `data-mode`, `data-density`, and `data-radius`
- Avoid hover effects that change layout; prefer background, color, shadow, or opacity changes
- Always provide matching accessible focus styles for interactive elements

## Icons and assets

- Use **Material Symbols Outlined** as the default icon set
- Treat icons as decorative unless they carry meaning; add visible text or `aria-label` where needed

## Structure

- App-level pages belong in `src/app/pages`
- Layout components belong in `src/app/layouts`
- Generic shared code can live in `src/app/components`, `directives`, `pipes`, `services`, and `interfaces`

## Code quality

- Keep templates and components simple and readable
- If the same signal read, computed value, or method call is used multiple times in a template, assign it with `@let`
- Prefer short, clear comments only where intent is not obvious
- Keep naming consistent with the existing codebase
- Prefix private class members with `_`, including fields and methods
- Omit explicit function and method return types; prefer inferred return types
- Order class members consistently: injected fields, public state, private state, constructor, public methods, private methods
- Respect `.editorconfig` and `.prettierrc`

## Before opening a PR

- Confirm the change matches the template conventions in the README
- Check that styling uses shared theme variables where applicable
- Check that dark mode still works
- Check that the change does not break SSR or prerender assumptions
- Check that translated strings still resolve through the expected pipe/service/provider path
- Check that any edited translations still render as proper native characters in the UI
- Keep documentation updated when project conventions or structure change
