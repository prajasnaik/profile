# Portfolio Website

A modern, interactive portfolio website built with Next.js that showcases professional profiles with multiple presentation modes and customizable themes. This responsive web application provides an engaging way to display personal information, skills, projects, and achievements through different visual experiences.

## Features

- **Multiple Display Modes**: Choose between Professional, Technical, and Fun modes to match different audiences and contexts
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dark/Light Theme Support**: Built-in theme switching with smooth transitions
- **Interactive Navigation**: Smooth scrolling navigation with section highlighting
- **Dynamic Content**: All content loaded from a structured JSON file for easy customization
- **Resume Integration**: Direct link to downloadable PDF resume
- **Modern UI Components**: Built with shadcn/ui components for a polished, professional appearance
- **TypeScript Support**: Full type safety with comprehensive TypeScript definitions
- **Performance Optimized**: Built with Next.js for optimal loading speeds and SEO

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **Animation**: Tailwind CSS animations with tw-animate-css

## Prerequisites

- Node.js 18.x or later
- pnpm, npm, yarn, or bun package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/prajasnaik/profile.git
cd profile
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Configuration

### Resume Data (resume.json)

The website content is driven by a JSON file located at `src/data/resume.json`. This file contains all your personal information, skills, projects, and other details.

#### File Structure

```json
{
  "personalInfo": {
    "name": "Your Full Name",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, Country",
    "website": "https://yourwebsite.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  },
  "background": {
    "introduction": "Brief introduction about yourself",
    "summary": "Detailed professional summary"
  },
  "skills": [
    {
      "category": "Category Name",
      "items": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ],
  "projects": [
    {
      "title": "Project Title",
      "description": "Project description",
      "technologies": ["Tech 1", "Tech 2"],
      "period": "2024",
      "link": "https://project-link.com",
      "github": "https://github.com/username/project"
    }
  ]
}
```

#### Configuration Steps:

1. **Update Personal Information**: Replace the placeholder values in `personalInfo` with your actual details
2. **Write Your Background**: Craft compelling introduction and summary texts
3. **List Your Skills**: Organize skills into relevant categories
4. **Add Projects**: Include your key projects with descriptions, technologies used, and links
5. **Save the File**: The website will automatically reflect changes when you refresh

### Profile Image

1. Place your profile image in the `public/` directory
2. Name it appropriately (`profile-photo.jpg`)
3. The image will be automatically referenced in the resume display

### Resume PDF

1. Place your resume PDF file in the `public/` directory
2. Name it `resume.pdf` (this is the expected filename)
3. The website includes a download link that points to this file

## Customization

### Theme Customization

The entire UI theme can be customized by modifying the CSS custom properties in `src/app/globals.css`. The file uses CSS custom properties (CSS variables) for consistent theming.

#### Key Theme Variables:

```css
:root {
  /* Light theme colors */
  --background: oklch(1 0 0); /* Main background */
  --foreground: oklch(0.2101 0.0318 264.6645); /* Text color */
  --primary: oklch(0.6716 0.1368 48.513); /* Primary accent */
  --secondary: oklch(0.536 0.0398 196.028); /* Secondary accent */
  --muted: oklch(0.967 0.0029 264.5419); /* Muted backgrounds */
  --border: oklch(0.9276 0.0058 264.5313); /* Border colors */
  /* ... additional variables */
}
```

#### Dark Theme Variables:

```css
.dark {
  /* Dark theme overrides */
  --background: oklch(0.2101 0.0318 264.6645);
  --foreground: oklch(1 0 0);
  /* ... dark theme variables */
}
```

#### Customization Steps:

1. Open `src/app/globals.css`
2. Modify the CSS custom properties to match your desired color scheme
3. Use [oklch color space](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) for better color control
4. Test changes in both light and dark modes
5. The theme toggle will automatically apply your custom colors

### Typography

The website uses custom font variables that can be modified:

```css
--font-sans: Geist Mono, ui-monospace, monospace;
--font-serif: serif;
--font-mono: JetBrains Mono, monospace;
```

## Usage

### Mode Selection

Upon loading, users are presented with three mode options:

- **Professional Mode**: Traditional resume layout with formal presentation
- **Tech Mode**: Developer-focused interface with terminal aesthetics
- **Fun Mode**: Casual, interactive presentation

### Navigation

- Use the navigation menu to jump between sections
- Smooth scrolling with active section highlighting
- Theme toggle available in the navigation bar

### Mobile Experience

- Fully responsive design optimized for mobile devices
- Touch-friendly navigation and interactions
- Optimized typography and spacing for smaller screens

## Building for Production

1. Build the application:

```bash
pnpm build
# or
npm run build
# or
yarn build
# or
bun build
```

2. Start the production server:

```bash
pnpm start
# or
npm start
# or
yarn start
# or
bun start
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms

This is a standard Next.js application that can be deployed to:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform supporting Node.js applications

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/prajasnaik/profile/issues) page
2. Create a new issue with detailed information
3. Include your `resume.json` structure if relevant

---

Built with ❤️ using Next.js and modern web technologies.

