# AGENTS.md — AI Coding Agent Guidelines

This file documents project conventions for AI coding agents (Cursor, Copilot, Codex, etc.).

---

## Project overview

This is a **VS Code / Cursor extension** that provides transparent encryption and decryption of [SOPS](https://github.com/getsops/sops)-managed secret files directly in the editor.

- **Language:** TypeScript
- **Runtime:** VS Code Extension Host (Node.js)
- **Entry point:** `src/extension.ts`
- **Output:** `out/` (compiled JS)
- **Package format:** `.vsix`

---

## Build, lint, and test

| Command             | Description                          |
|---------------------|--------------------------------------|
| `npm ci`            | Install dependencies (CI-safe)       |
| `npm run compile`   | Compile TypeScript → `out/`          |
| `npm run lint`      | Run ESLint on `src/**/*.ts`          |
| `npm run watch`     | Compile in watch mode                |
| `npm run pretest`   | Compile + lint                       |
| `npm test`          | Run extension tests (requires xvfb on Linux) |
| `npx vsce package`  | Build `.vsix` artifact               |

After changing `version` in `package.json`, always run `npm install` to update `package-lock.json` before committing.

---

## Git workflow

### Branch naming

```
<TICKET>
```

Where `TICKET` = GitHub issue reference, e.g. `SOPS-5`, `SOPS-16`.

### Commit messages

```
<TICKET>: <Short imperative summary>
```

- Ticket is uppercase
- Summary starts with a capital letter
- Imperative mood (e.g. "Add", "Fix", "Remove" — not "Added", "Fixes")

Examples:
- `SOPS-5: Add GitHub Actions publish pipeline`
- `SOPS-16: Add AGENTS.md with repository conventions`

### Pull requests

- PR title follows the same format as commit messages: `<TICKET>: <Summary>`
- One feature/fix per PR
- Target branch: `master`

---

## Code style

- TypeScript with strict mode enabled (`tsconfig.json`)
- ESLint with `@typescript-eslint` parser
- Semicolons required (enforced by ESLint `semi` rule)
- Use `curly` braces for all control structures
- Use strict equality (`===` / `!==`)
- All code, comments, and documentation in **English**

---

## Project structure

```
├── .github/workflows/   # CI/CD pipelines
├── src/
│   ├── extension.ts     # Main extension logic
│   ├── dotenv.ts        # DotEnv parser
│   └── test/            # Extension tests
├── test/workspace/      # Test fixture files
├── tools/               # Helper scripts
├── package.json         # Extension manifest + dependencies
├── tsconfig.json        # TypeScript configuration
├── .eslintrc.json       # ESLint configuration
└── CHANGELOG.md         # Version history (Keep a Changelog format)
```

---

## Security notes

- **Never** commit secrets or tokens to the repository
- The `.env` file in the repo root is SOPS-encrypted — do not decrypt it in CI; use GitHub Secrets instead
- Avoid `pull_request_target` trigger in workflows
