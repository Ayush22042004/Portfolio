# AYUSH SINGH — Personal Portfolio

A dark, Stranger Things–inspired portfolio to showcase projects, skills, and contact details. This is a static site built with plain HTML, CSS and vanilla JavaScript.

[Live demo](https://ayushsingh22.me/)

---

## About

This portfolio demonstrates: a dramatic theme, smooth micro‑interactions, an image slideshow in the About section, a subtle loader animation, and a responsive layout suitable for desktop and mobile.

Key goals:
- Present projects with clean visual hierarchy
- Show technical skills and contact information
- Deliver a memorable theme without heavy frameworks

---

## Features

- Responsive layout (desktop / tablet / mobile)
- Hero typing animation and CTA buttons
- About section image slideshow (auto, smooth crossfade)
- Subtle Stranger Things–style loader and atmospheric background
- Projects gallery with links to live demos and GitHub
- Contact form (uses Web3Forms in HTML)
- Theme toggle (Upside Down / Real World) and background music control

---

## Tech Stack

- HTML5
- CSS3 (flexbox, CSS variables, animations)
- JavaScript (ES6)
- Font Awesome (icons)
- Google Fonts (typography)

---

## Quick Start (local)

1. Clone the repo or download the ZIP.

```bash
git clone <your-repo-url>
cd personal-portfolio
```

2. Open locally:

```bash
# Option A: open index.html directly in a browser
start index.html    # Windows

# Option B: run a simple HTTP server (recommended)
python -m http.server 8000
# then visit http://localhost:8000
```

3. Edit content and assets:
- Replace images in the `images/` folder (profile, slideshow, project images).
- Update `index.html` for text/content and project links.
- Customize colors and theme variables in `styles.css`.

---

## Deployment

- GitHub Pages: push repo, enable Pages (or use the provided GitHub Actions workflow to publish to `gh-pages`).
- Netlify / Vercel: connect repository for CI/CD or use drag‑and‑drop for a static build.

See the repository's root for an example GitHub Actions workflow (if provided).

---

## Customization Notes

- Images: optimize images (JPEG/WebP) to improve load times.
- Audio: `audio/bg-music.mp3` is used by default — browsers typically block autoplay with sound; the player starts muted.
- Contact form: form posts to Web3Forms (see `index.html` for access key). Change to your preferred backend if needed.

---

## Files & Structure

```
personal-portfolio/
├─ index.html
├─ styles.css
├─ script.js
├─ images/
├─ audio/
└─ README.md
```

---

## Contributing

This is a personal portfolio template — feel free to fork and adapt. If you want me to help with customizations, tell me which changes you want.

---

## License

This project is provided as-is. Include your preferred license file (e.g., `LICENSE` with MIT) if you want to open-source it.

---

## Contact

Ayush Singh — ayushssingh2005@gmail.com

If you'd like, I can also:
- Create a GitHub Pages workflow and commit it.
- Prepare a `CNAME` and instructions for a custom domain.

Enjoy — and congrats on deploying your portfolio! 🎉

# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

### 🎨 Design & UI
- **Modern Design**: Clean, professional layout with attractive color scheme
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, hover animations, and smooth transitions
- **Interactive Elements**: Hover effects, button ripples, and dynamic content
- **Background Music**: Optional audio playback with a mute/unmute control

### 🚀 Functionality
- **Typing Animation**: Dynamic text animation in the hero section
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Navigate smoothly between sections
- **Active Navigation**: Highlights current section in navigation
- **Contact Form**: Functional contact form with validation
- **Back to Top Button**: Easy navigation back to the top

### 📱 Sections
1. **Hero Section**: Introduction with typing animation and call-to-action buttons
2. **About Section**: Personal information and statistics
3. **Skills Section**: Technical skills organized by category
4. **Projects Section**: Portfolio projects with hover effects
5. **Contact Section**: Contact information and contact form

## Setup Instructions

### 1. Clone or Download
- Download the project files to your computer
- Ensure all files are in the same directory

### 2. Add Your Images and Audio
Add the following images to the `images/` folder:
- `profile.jpg` - Your professional headshot (300x300px)

Additionally, place a music file (e.g. `bg-music.mp3`) in a new `audio/` folder or update the `<audio>` element `src` attribute in `index.html` to point to your preferred track. Note that modern browsers block autoplay with sound; the player starts muted and will only unmute/play after the visitor clicks the speaker icon.
- `about.jpg` - About section image (600x400px)
- `project1.jpg` - First project screenshot (600x400px)
- `project2.jpg` - Second project screenshot (600x400px)
- `project3.jpg` - Third project screenshot (600x400px)

### 3. Customize Content
Edit `index.html` to update:
- Your name and title
- About section content
- Skills and technologies
- Project information and links
- Contact information

### 4. Launch
- Double-click `index.html` to open in your browser
- Or use a local server for development

## File Structure

```
personal-portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── images/             # Image assets folder
│   ├── profile.jpg     # Profile picture
│   ├── about.jpg       # About section image
│   ├── project1.jpg    # Project 1 screenshot
│   ├── project2.jpg    # Project 2 screenshot
│   ├── project3.jpg    # Project 3 screenshot
│   └── README.md       # Image guidelines
└── README.md          # Project documentation
```

## Customization Guide

### Colors
The main color scheme uses:
- **Primary**: `#6c63ff` (Purple)
- **Secondary**: `#ffd700` (Gold)
- **Text**: `#333` (Dark Gray)
- **Background**: `#f8f9fa` (Light Gray)

To change colors, update the CSS variables in `styles.css`.

### Fonts
The website uses **Poppins** font from Google Fonts. To change fonts:
1. Update the Google Fonts link in `index.html`
2. Change the `font-family` property in `styles.css`

### Content
Update the following in `index.html`:
- **Line 6**: Change page title
- **Line 23**: Update logo/brand name
- **Lines 43-44**: Your name and title
- **Line 46**: Update typing animation words in `script.js`
- **Lines 75-100**: About section content
- **Lines 125-200**: Skills section
- **Lines 230-300**: Projects information
- **Lines 330-360**: Contact information

### Projects
For each project, update:
- Project image
- Project title and description
- Technology tags
- Live demo and GitHub links

## Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (limited support)

## Performance
- Optimized images recommended
- Lazy loading implemented
- Minimal external dependencies
- Fast loading times

## Deployment

### GitHub Pages
1. Upload files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be deployed automatically

### Custom Hosting
Upload all files to your web server's public folder.

## Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## License
This project is open source and available under the [MIT License](LICENSE).

## Support
If you need help customizing the portfolio, check the comments in the code files or refer to the documentation above.

---

**Happy coding! 🚀**
