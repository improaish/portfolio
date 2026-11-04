# Aishwarya Kumari - Premium Professional Portfolio Website

Modern, recruiter-focused personal portfolio website for **Aishwarya Kumari**, presenting an early-career candidate with an academic background in **Artificial Intelligence**, an industry interest in **Educational Technology (EdTech)** and **Emerging Technologies**, and complementary expertise in **Content Strategy**.

---

## 🚀 Live Preview & Deployment
- **Built with**: React 18, Vite, Tailwind CSS, Lucide Icons
- **Vercel-ready** with SPA routing, production asset caching, and security headers configured in `vercel.json`.
- **Production Build Directory**: `dist/`

### Deploy to Vercel

1. Import this repository into Vercel.
2. Keep the Vite framework preset and the project defaults: `npm run build` for the build command and `dist` for the output directory. These are also declared in `vercel.json`.
3. Deploy. No environment variables or server-side functions are required.

The Vercel rewrite serves the app for direct visits to client-side routes. Hashed files in `/assets/` are cached as immutable; HTML and other files are revalidated. Add a custom domain in the Vercel project settings when you are ready to use a permanent production URL. Netlify deployment remains supported by `netlify.toml`.

---

## 🛠️ Project Structure

```
Tech Portfoilo/
├── dist/                      # Production build output
│   ├── assets/                # Minified and optimized JS/CSS bundles
│   ├── aishwarya_image.jpg    # High-quality profile photo
│   ├── favicon.svg            # Custom modern monogram favicon
│   └── index.html             # SEO-optimized HTML with OpenGraph tags
├── public/
│   ├── assets/
│   │   └── activities/        # Original event and community photos
│   ├── aishwarya_image.jpg    # Public profile image
│   └── favicon.svg            # Monogram favicon
├── src/
│   ├── assets/                # Profile and graphic assets
│   ├── components/            # Modular React components
│   │   ├── About.jsx          # Split-layout narrative and highlights
│   │   ├── Activities.jsx     # Responsive activity gallery and photo preview
│   │   ├── BrandIcons.jsx     # Clean SVG brand icons (LinkedIn, GitHub)
│   │   ├── Certifications.jsx # Categorized professional courses and credentials
│   │   ├── Contact.jsx        # Direct outreach, email, LinkedIn & message form
│   │   ├── ContentArchitecture.jsx # 8 content architecture & structuring cards
│   │   ├── EdTechSection.jsx  # "Technology Meets Education" 3 visual cards
│   │   ├── Education.jsx      # Academic background (B.Tech AI, Polytechnic, etc.)
│   │   ├── Experience.jsx     # 6 Hands-on internships timeline
│   │   ├── Expertise.jsx      # 9 Technical expertise & domain cards
│   │   ├── Footer.jsx         # Minimalist footer with dynamic copyright
│   │   ├── Hero.jsx           # Two-column recruiter hero section
│   │   ├── Languages.jsx      # English & Hindi proficiency section
│   │   ├── Navbar.jsx         # Sticky header with active highlight & mobile drawer
│   │   ├── Projects.jsx       # 6 extensible project cards with filter tabs
│   │   └── Toast.jsx          # Notification toast for clipboard copy actions
│   ├── data/
│   │   └── portfolioData.js   # Centralized data file for easy updates
│   ├── App.jsx                # Core application component
│   ├── index.css              # Custom styling, gradients, scrollbars
│   └── main.jsx               # React entry point
├── index.html                 # SEO metadata and Google Fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💡 How to Add New Projects in Seconds

Open `src/data/portfolioData.js` and locate `projectsData`. Simply update or add a new project object:

```javascript
{
  id: "my-new-project",
  title: "AI Question Generator for Classrooms",
  status: "Completed",
  category: "AI & EdTech",
  description: "An AI application generating adaptive quiz questions for digital classrooms.",
  technologies: ["Python", "React", "Gemini API", "FastAPI"],
  githubUrl: "https://github.com/improaish/ai-classroom",
  liveDemoUrl: "https://ai-classroom-demo.netlify.app",
  isPlaceholder: false
}
```

The website will automatically display the new project with live links without altering any layout or CSS.

## Updating Activities and Certifications

Edit `activitiesData`, `activityPhotosData`, and `certificationsData` in `src/data/portfolioData.js` to add or update entries without changing the layout components.

- Put activity photos in `public/assets/activities/` and add their paths, meaningful `imageAlt` text, and a `size` (`panoramic`, `square`, or `portrait`) to `activityPhotosData`. The collage uses each photo's shape for its tile size and keeps the full image visible beside the text-only activity list. `isPlaceholder: true` marks event details that still need confirmation.
- Put certificate scans in `public/assets/certificates/` and set the credential's `image` path. Add a real `verificationUrl` when one is available; leave it empty until then. Verification links are shown only for HTTP(S) URLs.
- The supplied activity photos are kept in their original form. The listed course names and issuers are present, but certificate scans and verification links have not been supplied.

---

## 💻 Available Scripts

- **`npm run dev`**: Starts local Vite development server at `http://localhost:3000`
- **`npm run build`**: Compiles and minifies production assets into `dist/`
- **`npm run preview`**: Previews the production build locally

---

## 🎨 Design System
- **Colors**: Deep Navy Blue (`#040814`, `#070f26`), Charcoal Black (`#111827`), Electric Blue (`#2563eb`), Subtle Cyan (`#06b6d4`, `#38bdf8`), Slate White (`#f8fafc`).
- **Typography**: Inter & Plus Jakarta Sans.
- **Tone**: Recruiter-focused, authoritative yet approachable, grounded early-career professional credibility.
