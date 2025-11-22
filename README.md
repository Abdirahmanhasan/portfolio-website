# Abdirahman Hassan Jimale - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ Built with Next.js 15 App Router for optimal performance
- 🎨 Beautiful UI with Tailwind CSS
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🎯 SEO optimized
- ♿ Accessible design
- 🚀 Fast loading performance

## Sections

- **Hero** - Introduction with contact information
- **About** - Professional summary, education, and languages
- **Skills** - Technical and professional skills with visual indicators
- **Experience** - Work history with detailed responsibilities
- **Certifications** - Professional certifications and workshops
- **Contact** - Contact form and information
- **Footer** - Quick links and social media

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portofolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes

## Project Structure

```
portofolio/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeProvider.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Colors

Edit the color scheme in [tailwind.config.ts](tailwind.config.ts) and [globals.css](app/globals.css).

### Content

Update the content in each component file in the `app/components/` directory.

### Metadata

Edit SEO metadata in [app/layout.tsx](app/layout.tsx).

## License

© 2025 Abdirahman Hassan Jimale. All rights reserved.

## Contact

- **Email:** abdirahmanhasan04@gmail.com
- **Phone:** +252 617500237
- **Location:** Mogadishu, Somalia
