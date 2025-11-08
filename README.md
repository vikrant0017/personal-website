# Portfolio Site

A modern, responsive portfolio website built with Astro, React, and shadcn/ui components.

## 🚀 Features

- **Modern Stack**: Built with Astro 5.x and React 19
- **Beautiful UI**: Styled with Tailwind CSS v4 and shadcn/ui components
- **Dark Mode**: Automatic theme switching with light, dark, and system preferences
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Fast Performance**: Static site generation for optimal loading speeds
- **Type-Safe**: Written with TypeScript for better developer experience

## 📦 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   └── Contact.astro
│   ├── layouts/        # Page layouts
│   │   └── main.astro
│   ├── pages/          # File-based routing
│   │   └── index.astro
│   └── styles/         # Global styles
│       └── global.css
└── package.json
```

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Web framework
- [React](https://react.dev) - UI library
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [TypeScript](https://www.typescriptlang.org) - Type safety

## 📝 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:4321](http://localhost:4321) in your browser

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.astro`):
   - Update your name
   - Modify the introduction text
   - Change skill badges

2. **About Section** (`src/components/About.astro`):
   - Update your bio
   - Modify skills and technologies
   - Change stats (projects completed, years of experience)

3. **Projects Section** (`src/components/Projects.astro`):
   - Add/remove projects
   - Update project descriptions, tags, and links
   - Replace placeholder links with actual project URLs

4. **Contact Section** (`src/components/Contact.astro`):
   - Update email address
   - Add your LinkedIn profile URL
   - Add your GitHub profile URL

### Add More shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Available components: button, card, badge, dialog, dropdown-menu, and many more!

### Styling

- Global styles: `src/styles/global.css`
- Tailwind config: Uses Tailwind CSS v4 (configured via `@tailwindcss/vite`)
- Component-level styling: Use Tailwind utility classes

## 🏗️ Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to your hosting provider.

## 🚢 Deployment

This site can be deployed to any static hosting service:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

If you found this helpful, give it a star!

---

Built with ❤️ using Astro and shadcn/ui