# Lau Shie Bin Backend & DevOps Portfolio

Personal portfolio resume website for **Lau Shie Bin**, a Computer Science student at Universiti Utara Malaysia targeting Backend and DevOps internship roles.

The site is built with Angular and presents a public, recruiter-friendly version of my resume, selected projects, technical skills, education, experience, awards and contact links.

## Current Positioning

- Target role: Backend & DevOps Intern
- Internship availability: September 2026 - March 2027
- Location: Johor, Malaysia
- Focus areas: API development, microservices, CI/CD automation, cloud deployment and production-oriented engineering workflows

## Featured Projects

- **HalalTrack** - FYP Gold Medal project for halal logistics traceability, Laravel backend workflows, Flutter mobile access, Docker and GitHub Actions.
- **CampusTrack** - Spring Boot microservices platform with PostgreSQL service databases, Spring Cloud Gateway, JWT/BCrypt authentication and WebSocket GPS broadcasting.
- **RushB LMS DevOps Pipeline** - group project where my scope covered CD and cloud deployment using GitHub Actions, Docker Hub, Terraform, Google Cloud Compute Engine, k3s and New Relic.
- **Smart Room Safety & Comfort** - ESP32 monitoring prototype with Flask API, SQLite, dashboard workflows and Cloudflare Tunnel demo access.
- **Network Status Dashboard** - operations-style dashboard for device health, bandwidth, alerts, floorplans, camera previews and troubleshooting workflows.

## Tech Stack

- Angular
- TypeScript
- HTML
- CSS
- Angular Router
- GitHub Pages deployment through GitHub Actions

## Local Development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm start
```

Open:

```bash
http://localhost:4200/
```

## Build

Build for local production output:

```bash
npm run build
```

Build for GitHub Pages:

```bash
npx ng build --configuration production --base-href /my-resume/
```

The GitHub Pages workflow uploads the Angular browser output from:

```text
dist/my-resume/browser
```

## Project Structure

```text
src/
  app/
    pages/
      home/
      personal/
      education/
      work/
      skill/
      project/
      certification/
public/
  images/
  resume/
.github/
  workflows/
```

## Public Resume

The downloadable PDF under `public/resume/` is public-safe. Reference contact details are not published on the website.

## Author

**Lau Shie Bin**

- GitHub: [shiebin-bit](https://github.com/shiebin-bit)
- LinkedIn: [linkedin.com/in/shiebin](https://linkedin.com/in/shiebin)
- Email: [shiebin1188@gmail.com](mailto:shiebin1188@gmail.com)
