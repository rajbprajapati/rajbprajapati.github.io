# Raj B Prajapati — Portfolio

> Personal portfolio website of **Raj B Prajapati**, Backend & Distributed Systems Engineer and Tech Lead.  
> Hosted on **GitHub Pages** via Next.js Static Export (`output: 'export'`) and automated GitHub Actions CI/CD.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom High-Performance Brand SVGs
- **Deployment**: [GitHub Actions](https://github.com/features/actions) -> [GitHub Pages](https://pages.github.com/)
- **SEO & Schema**: JSON-LD Structured Data (`schema.org/Person`), OpenGraph cards, Twitter cards, dynamic `sitemap.xml`, and `robots.txt`

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build the production static export:**
   ```bash
   npm run build
   ```
   The static export will be compiled into the `out/` directory, ready for GitHub Pages hosting.

---

## 🛠️ Updating Portfolio Content

All resume experience, telemetry metrics, multi-cloud certifications, projects, and skills are isolated in a typed data layer:

👉 **[`src/data/portfolio.ts`](src/data/portfolio.ts)**

To add a new certification, promotion, or case study, edit this file — the UI components will automatically reflect the changes with full type safety.

---

## 🚢 GitHub Pages Automated Deployment

This repository includes an automated GitHub Actions deployment workflow at **[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)**.

### First-Time GitHub Setup:
1. Go to your repository on GitHub: `https://github.com/rajbprajapati/rajbprajapati.github.io`
2. Navigate to **Settings** > **Pages**
3. Under **Build and deployment** > **Source**, select **GitHub Actions**
4. Any `git push` to `master` (or `main`) will automatically test, build, and publish the static site!

---

## 📜 License & Credits

Designed & Built with modern web best practices by Raj B Prajapati.
All original legacy site history is safeguarded on the `legacy-site` git branch.
