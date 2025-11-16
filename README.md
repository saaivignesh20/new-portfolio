# Full-Stack Developer Portfolio

A modern, premium light-themed portfolio website built with Next.js 16, showcasing full-stack development expertise.

## Features

- **Modern Design**: Clean, minimalist aesthetic inspired by Linear.app and Vercel
- **Light Theme**: Professional light-themed interface with elegant color palette
- **Premium Typography**: Inter for UI/body text, JetBrains Mono for technical elements
- **Smooth Animations**: Framer Motion powered micro-interactions throughout
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast load times with Next.js 16 and optimized assets
- **Type-Safe**: Built with TypeScript for robust code quality

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 3.4
- **UI Components**: Custom components built with shadcn/ui patterns
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and design tokens
│   ├── layout.tsx        # Root layout with fonts and theme provider
│   └── page.tsx          # Main page composition
├── components/
│   ├── sections/         # Main portfolio sections
│   │   ├── navigation.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   └── theme-provider.tsx
└── lib/
    └── utils.ts         # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd new-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Hero Section** (`components/sections/hero.tsx`)
   - Update name, title, description
   - Change social media links

2. **About Section** (`components/sections/about.tsx`)
   - Modify bio and statistics
   - Update highlight cards

3. **Skills Section** (`components/sections/skills.tsx`)
   - Add/remove skill categories
   - Adjust skill levels

4. **Experience Section** (`components/sections/experience.tsx`)
   - Update work experience entries
   - Modify job descriptions and technologies

5. **Projects Section** (`components/sections/projects.tsx`)
   - Add your project details
   - Update project images, links, and technologies

6. **Contact Section** (`components/sections/contact.tsx`)
   - Update contact information
   - Configure form submission endpoint

### Design Tokens

Customize colors and design tokens in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --primary: #2563eb;
  /* ... more variables */
}
```

### Fonts

The portfolio uses:
- **Inter**: For headings, body text, and UI elements
- **JetBrains Mono**: For code-styled elements and technical labels

Fonts are loaded via Google Fonts in `app/layout.tsx`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
```

The build output will be in the `.next` folder.

## Performance

- Lighthouse Score: 95+
- Fully responsive design
- Optimized images with next/image
- Code splitting and lazy loading
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

For questions or feedback, feel free to reach out through the contact form on the website.

---

Built with ❤️ using Next.js & TailwindCSS
