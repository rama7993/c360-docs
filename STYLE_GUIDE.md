# 📖 C360 Documentation Style Guide & Standards

This style guide defines the uniform structure, MDX conventions, right-hand navigation (TOC) rules, and search optimization standards for all documentation files in this repository.

---

## 📌 1. Document Structure & Heading Hierarchy

To ensure uniform right-side navigation (Table of Contents / TOC) and accurate Algolia Search indexing across all pages, follow this exact heading hierarchy:

- **Single `# H1` per Document**: Each page must begin with exactly one top-level `# H1` heading representing the document title.
- **Section Headings (`## H2`)**: Use `##` for primary sections on the page. Docusaurus generates main TOC links from `## H2` headings.
- **Subsection Headings (`### H3`)**: Use `###` for sub-features, actions, or sub-topics under an `## H2` section.
- **No Bulleted Headings**: Never prefix headings with bullet points (e.g. ❌ `- #### Heading` or ❌ `- ### Heading`). Bulleted headings corrupt the right-side TOC and impair search indexers.

```mdx
# 📢 Telemarketing Report

## 📊 Executive Dashboard

### 📞 Telemarketing Overview

### 🎯 Campaign Performance
```

---

## 🖼️ 2. Custom React Components & Media Guidelines

### `DocImage` Component

Use the global `<DocImage />` React component instead of raw HTML `<figure>` and `<figcaption>` boilerplate.

```mdx
<DocImage
  src="/media/analytics/report/marketing-report.png"
  alt="Marketing Performance Overview"
  caption="Marketing Performance Dashboard Overview"
/>
```

- **`src`**: Path relative to static media directory (`/media/...`).
- **`alt`** (optional): Accessible image alternative text.
- **`caption`** (optional): Displayed below the image with consistent styling.
- **`maxWidth`** (optional): Constrains maximum image width (e.g. `maxWidth="650px"`).

---

## 🧰 3. Collapsible Sections & Quick Actions

Use column-0 aligned `<details>` or `<QuickActions />` components:

```mdx
<details>
<summary><strong>Click to see quick actions</strong></summary>

- Toggle between Table view and Chart view.
- Export or download the report.
- Filter by Date Range and User.

</details>
```

> ⚠️ **Important**: `<details>`, `<summary>`, and `</details>` tags must always be column-0 aligned (no leading spaces) to prevent SSG paragraph nesting errors (`No "p" element in scope`).

---

## 💡 4. Admonitions & Callouts

Use standard Docusaurus callouts for notes, tips, warnings, and info boxes:

```mdx
:::info
By default, reports display data for one year back from today.
:::

:::tip
Country and Company filters function when a User is selected.
:::
```

---

## 🎨 5. Formatting & Prettier Rules

- All documentation files use the `.mdx` extension.
- The project `.prettierrc` enforces the `mdx` parser:
  ```json
  {
    "overrides": [
      {
        "files": ["*.md", "*.mdx"],
        "options": {
          "parser": "mdx"
        }
      }
    ]
  }
  ```
- Use `{/* ... */}` for MDX comments. Never use broken `{/_ ... _/}` syntax.

---

## 🧪 6. Build & Type Verification

Before committing changes, verify that your document compiles without errors or warnings:

```bash
npm run typecheck   # Verifies TypeScript components
npm run build       # Verifies static site generation (SSG) & MDX compilation
```
