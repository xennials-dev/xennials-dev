---
name: web-cleanup-and-deploy
description: >-
  Audit, clean, refactor, and prepare web applications (HTML/CSS/JS, Vite, Netlify, Serverless)
  for deployment. Detects and eliminates dead or redundant code, hoists ES module imports,
  unifies component lifecycles, and validates production builds.
---

# Web Codebase Cleanup, Refactoring & Deployment Skill

This skill provides a standardized, reliable runbook for auditing web application projects, eliminating dead/redundant code, refactoring scripts and styles without regressions, and validating that the codebase is completely deployment-ready.

---

## 1. Dead Code & Redundancy Audit

1. **Scan for Unused or Broken Inline Scripts**:
   - Check all HTML pages for legacy `<script>` tags that reference deprecated DOM IDs or execute duplicate event listeners already handled by external modules.
   - Remove obsolete inline handlers and route events through modular JavaScript modules.

2. **Audit ES Module Dependencies & Imports**:
   - Ensure all ES `import` statements are hoisted to the top of the file.
   - Eliminate circular or duplicate imports across components and service modules.

3. **Check Style & Selector Cleanliness**:
   - Verify that CSS selectors in stylesheets correspond to actual markup in HTML templates.
   - Clean up orphaned utility styles and ensure theme switching classes (e.g., `data-theme`) are cleanly wired.

---

## 2. Architecture & Lifecycle Refactoring

1. **Unified Single-Entry Lifecycle**:
   - Consolidate all DOM initialization routines under a single `DOMContentLoaded` handler.
   - Guard every component initializer with defensive checks (e.g., `if (!element) return;`) so scripts execute cleanly across multiple HTML pages without throwing `null` exceptions.

2. **Global & Window Scope Management**:
   - When interactive HTML elements trigger inline handlers (e.g., `onclick="showToast(...)"`), explicitly expose necessary utility functions to `window` (e.g., `window.showToast = showToast`).

3. **Multi-Page & Serverless Support**:
   - Ensure serverless functions (e.g., `netlify/functions/`) use modern runtime practices (CORS headers, OPTIONS preflight, graceful error handling).
   - Ensure service modules can execute in both browser-direct and backend function environments.

---

## 3. Deployment Configuration Audit

1. **Verify Build Automation**:
   - Check `package.json` for standard build scripts (`"build": "vite build"`).
   - In `netlify.toml` (or platform config), ensure `command = "npm run build"` is explicitly specified under `[build]` along with the correct publish directory (`publish = "dist"`).

2. **Security & Cache Headers**:
   - Ensure headers include `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and appropriate cache-control rules for static assets.

3. **Redirects & Proxies**:
   - Verify that API routes (e.g., `/api/*` &rarr; `/.netlify/functions/*`) have valid rewrite rules configured.

---

## 4. Verification & Validation Gate

1. **Execute Production Bundle Build**:
   ```bash
   npm run build
   ```
2. **Inspect Build Output**:
   - Confirm all HTML entrypoints, scripts, stylesheets, and image assets are generated in `dist/` without errors or missing chunk warnings.
3. **Verify Interactive Flows**:
   - Verify modals, accordions, theme switches, sliders, and async APIs respond accurately and without console errors.
