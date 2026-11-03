# Aishwarya Kumari - Premium Professional Portfolio Website

Modern, recruiter-focused personal portfolio website for **Aishwarya Kumari**, presenting an early-career candidate with an academic background in **Artificial Intelligence**, an industry interest in **Educational Technology (EdTech)** and **Emerging Technologies**, and complementary expertise in **Content Architecture**.

---

## 🚀 Live Preview & Deployment
- **Built with**: React 18, Vite, Tailwind CSS, Lucide Icons
- **Ready to deploy** to Netlify, Vercel, or GitHub Pages immediately.
- **Production Build Directory**: `dist/`

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
│   ├── aishwarya_image.jpg    # Public profile image
│   └── favicon.svg            # Monogram favicon
├── src/
│   ├── assets/                # Profile and graphic assets
│   ├── components/            # Modular React components
│   │   ├── About.jsx          # Split-layout narrative and highlights
│   │   ├── BrandIcons.jsx     # Clean SVG brand icons (LinkedIn, GitHub)
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

---

## 💻 Available Scripts

- **`npm run dev`**: Starts local Vite development server at `http://localhost:3000`
- **`npm run build`**: Compiles production assets into `dist/` with minification and gzip optimization
- **`npm run preview`**: Previews the production build locally

---

## 🎨 Design System
- **Colors**: Deep Navy Blue (`#040814`, `#070f26`), Charcoal Black (`#111827`), Electric Blue (`#2563eb`), Subtle Cyan (`#06b6d4`, `#38bdf8`), Slate White (`#f8fafc`).
- **Typography**: Inter & Plus Jakarta Sans.
- **Tone**: Recruiter-focused, authoritative yet approachable, grounded early-career professional credibility.
