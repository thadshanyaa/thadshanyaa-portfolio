# Thadshanyaa Arulkodeswaran — Portfolio

A single-page portfolio built with React, Vite, TypeScript, Tailwind CSS, and Motion (Framer Motion).

**Stack:** React 18 · Vite 5 · TypeScript · Tailwind CSS 3 · Motion · Lucide React

---

## Project structure

```
src/
  components/   Page sections and shared UI (Navbar, Hero, About, Experience, Projects, Contact, ...)
  data/         Editable content: portfolio.ts, projects.ts, skills.ts
  hooks/        useActiveSection (navigation highlighting)
  lib/          url helpers
  App.tsx       Page composition
  main.tsx      Entry point
  index.css     Global styles, glass utilities, reduced-motion rules
public/         favicon.svg, robots.txt (add project screenshots under public/projects/)
```

Almost all content lives in `src/data/`. Edit those files to update text, links, skills, and projects without touching layout code.

---

## 1. Install Node.js

Install **Node.js 20 LTS or newer** from https://nodejs.org. Check the install in a terminal:

```bash
node -v
npm -v
```

## 2. Open the project in VS Code

1. Open VS Code.
2. Choose **File → Open Folder** and select the `thadshanyaa-portfolio` folder.
3. Open the integrated terminal with **Terminal → New Terminal**.

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173) in your browser.

## 5. Test the website

Check that:

- Every navigation item scrolls to its section.
- The mobile menu opens, animates, and closes after a link is selected.
- "Explore My Work" and "Let's Connect" scroll to the right sections.
- "View All Projects" reveals six more projects, and "Show Less" collapses them.
- Email and phone links open your mail and phone apps.

Resize the browser window or use DevTools' device mode to check mobile layouts.

## 6. Fix errors before deployment

Run the production build. It type-checks and bundles the site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

If the build fails, read the first error in the terminal. It names the file and line to fix.

---

## Customising content

| What to change | Where |
| --- | --- |
| Name, contact details, GitHub/LinkedIn, current role, previous roles, education | `src/data/portfolio.ts` |
| Skill groups and skill names | `src/data/skills.ts` |
| Projects, project URLs, descriptions, technologies, screenshots | `src/data/projects.ts` |
| Colours, glass styles, buttons | `tailwind.config.js` and `src/index.css` |
| Page title and meta description | `index.html` |

### Items to complete

These were not in the supplied information, so they are placeholders or hidden:

- **GitHub and LinkedIn:** set `githubUrl` and `linkedinUrl` in `src/data/portfolio.ts`. While empty, the Contact section shows "Profile link to be added" and no social icons appear in the footer.
- **Education qualification (ICBT Campus):** replace `PENDING_QUALIFICATION` in `src/data/portfolio.ts` once confirmed.
- **Project screenshots:** the project cards use styled placeholders. To add a real preview, save a screenshot to `public/projects/` and set `previewImage`, for example `previewImage: '/projects/vanni-inn.jpg'`.
- **Project descriptions:** the WordPress and company project descriptions are short and factual. Expand them in `src/data/projects.ts` with details you can verify.
- **Profile photo:** none was supplied, so the hero uses an initials composition. To add a photo, place it in `public/` and replace the initials block in `src/components/Hero.tsx`.
- **Phone link format:** `phoneDisplay` shows `0742425048`. `phoneHref` uses the international form `+94742425048` so the link dials correctly from outside Sri Lanka.

---

## 7. Create a GitHub repository

1. Go to https://github.com/new.
2. Enter a repository name, for example `thadshanyaa-portfolio`.
3. Leave "Add a README" and "Add .gitignore" unchecked, because the project already includes them.
4. Click **Create repository**.

## 8. Upload the code

### Option A: Git in the terminal

From the project folder:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/thadshanyaa-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. The `.gitignore` file keeps `node_modules` and `dist` out of the repository.

### Option B: GitHub Desktop

1. Open GitHub Desktop and choose **File → Add Local Repository**.
2. Select the `thadshanyaa-portfolio` folder.
3. Write a summary, click **Commit to main**, then **Publish repository**.

## 9. Connect the repository to Vercel

1. Sign in at https://vercel.com with your GitHub account.
2. Click **Add New… → Project**.
3. Find `thadshanyaa-portfolio` and click **Import**.

## 10. Deploy

Vercel usually detects Vite automatically. Confirm these settings:

| Setting | Value |
| --- | --- |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

No environment variables are required. Click **Deploy** and wait for the build to finish. Vercel then gives you a live URL.

## 11. Update the site after future changes

Edit files locally, test with `npm run dev`, then commit and push:

```bash
git add .
git commit -m "Update projects"
git push
```

Vercel redeploys automatically after each push to `main`.

## 12. Connect a custom domain (optional)

1. In Vercel, open your project and go to **Settings → Domains**.
2. Enter your domain, for example `www.yourname.com`, and click **Add**.
3. Add the DNS records Vercel shows at your domain registrar. Vercel displays the exact records to use.
4. Wait for verification. Vercel issues the SSL certificate automatically.

---

## Notes

- No backend, database, or contact form is included. Contact uses direct `mailto:` and `tel:` links. A form can be added later with a form service.
- No analytics or third-party tracking scripts are included.
- Fonts (Inter and Space Grotesk) load from Google Fonts.
