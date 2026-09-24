# Satisfic C360 Documentation

Official documentation for **Satisfic C360** — Partner Marketing Concierge Solution for OEMs, Distributors, and Partners.

Built with [Docusaurus](https://docusaurus.io/).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 18.0.0`
- `npm` or `yarn`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Satisfic-Pte/C360-docs.git
cd C360-docs
npm install
```

_(or `yarn install`)_

---

## 💻 Local Development

Start the development server:

```bash
npm start
# or yarn start
```

The site will be available locally at `http://localhost:3000`. Changes in `docs/` and `src/` are hot-reloaded automatically.

---

## 📦 Build & Test Production Bundle

Generate a static production build into the `build/` directory:

```bash
npm run build
# or yarn build
```

Preview the production build locally:

```bash
npm run serve
# or yarn serve
```

## 📁 Project Structure

```text
├── docs/                 # Documentation Markdown / MDX files
│   ├── intro.md
│   └── ...
├── src/                  # React components, pages, and custom styles
│   ├── css/custom.css    # Custom CSS styles
│   └── pages/            # Custom landing page and components
├── static/               # Static assets (images, icons, etc.)
├── docusaurus.config.ts  # Main site and Docusaurus configuration
├── sidebars.ts           # Documentation sidebar navigation hierarchy
└── package.json          # Dependencies and scripts
```
