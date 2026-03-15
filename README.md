# AYUSH SINGH - Personal Portfolio

Stranger Things-inspired personal portfolio built with HTML, CSS, and vanilla JavaScript.

## Live Website

- Production: https://ayushsingh22.me

## Features

- Responsive design for desktop, tablet, and mobile
- Hero typewriter animation and smooth scrolling
- About section slideshow with auto transitions
- Project cards with live demo and GitHub links
- Theme switcher (Upside Down / Real World)
- Background music toggle
- Contact form integration via Web3Forms

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Font Awesome
- Google Fonts

## Project Structure

```text
personal-portfolio/
|-- index.html
|-- styles.css
|-- script.js
|-- audio/
|-- images/
`-- README.md
```

## Run Locally

1. Clone the repository.
2. Open with a local server.

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Customize

- Update content in index.html
- Update animations/styles in styles.css
- Update interactions in script.js
- Replace assets in images/ and audio/

## Deployment

### GitHub Pages

1. Push your code to GitHub.
2. Open repository Settings > Pages.
3. Under Build and deployment, choose Deploy from a branch.
4. Select the main branch and /(root), then save.
5. Wait for deployment, then open the generated GitHub Pages URL.

### Custom Domain (after deployment)

1. In GitHub Pages settings, set Custom domain to ayushsingh22.me.
2. Keep the CNAME file in the project root as ayushsingh22.me.
3. Add DNS records at your domain provider:
- A record(s) -> GitHub Pages IPs (for apex domain)
- CNAME -> <your-username>.github.io (for www)
4. Enable Enforce HTTPS once DNS is active.

### Other Hosts

- Netlify and Vercel are also supported.

## Contact

- Email: ayushssingh2005@gmail.com
- GitHub: https://github.com/Ayush22042004
