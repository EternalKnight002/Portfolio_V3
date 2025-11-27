<div align="center">
  <img alt="Aman Kumar – Full Stack & Cloud-Native Developer" src="./public/me.png" width="180" height="180">
  <h1>My Portfolio</h1>
  <p>Full Stack & Cloud-Native Developer • Building scalable applications with modern tech</p>
  <a href="https://my-portfolio-iota-taupe-96.vercel.app/">View the live site</a> ·
  <a href="https://www.linkedin.com/in/aman-kumar-537a73296/">Connect on LinkedIn</a> ·
  <a href="https://github.com/EternalKnight002">Follow on GitHub</a>
</div>

---

## Overview

This repository powers a personal portfolio: a **dark-mode-first** space showcasing **AI systems**, **full-stack products**, and **cloud-native applications**. It is a single **Next.js 14** project configured primarily through one data file (`src/data/resume.tsx`) for quick iteration on experience, skills, projects, and blog posts.

-----

## Highlights

  * **Config-first**: All major content is managed from `src/data/resume.tsx`, minimizing the need to dig through components.
  * **Motion-rich UI**: Features blur/fade animations and interactive cards implemented with `magicui` and `framer-motion`.
  * **Fully responsive**: Provides polished layouts across all devices (mobile, tablet, and desktop).
  * **Optimized for Vercel**: Supports instant deployments with preview URLs for every branch.

-----

## Tech Stack

  * **Framework**: `Next.js 14`, `React 18`, `TypeScript`
  * **Styling**: `Tailwind CSS`, `shadcn/ui`, `clsx`, `tailwind-merge`
  * **Animation**: `framer-motion` and `motion`
  * **Content**: Markdown-powered blog using `react-markdown`, `remark`, and `rehype` for rendering and syntax highlighting.
  * **Tooling**: `pnpm` for package management.

-----

## Getting Started

To get the project running locally:

```bash
# 1. Clone the repository
git clone https://github.com/deltacoder2603/portfolio.git
cd portfolio

# 2. Install dependencies (using pnpm as per config)
pnpm install

# 3. Run the development server
pnpm dev
```

The site runs at `http://localhost:3000`.

-----

## Personalizing

  * Modify **`src/data/resume.tsx`** to update all main content sections: hero text, skills, experience, education, and project details.
  * Add project preview images (e.g., `.png`, `.jpg`) into the **`public/`** directory.
  * Blog posts are written in MDX and live in **`content/`**—use the provided `hello-world.mdx` as a template.
  * Update global SEO and metadata tags (title, description, Open Graph, Twitter) in **`src/app/layout.tsx`**.

-----

## Deployment

The project is designed for easy deployment via **Vercel**:

1.  Connect the GitHub repository to your Vercel account.
2.  The recommended build command is `pnpm build`.
3.  The output directory should be set to `.next`.

Push to the `main` branch for production, or use feature branches to generate preview deployments.

-----

## License

This project is licensed under the **MIT License**. See the [LICENSE](https://www.google.com/search?q=./LICENSE) file for full details.