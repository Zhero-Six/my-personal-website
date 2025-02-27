# My Personal Website

A responsive personal website built with HTML, CSS, and JavaScript, featuring a modern futuristic design with interactive animations and a particle background. The site includes four pages—Home, About, Work, and Contact—with a functional contact form powered by Formspree, local images, and social media links across all pages.

## Features
- **Modern Futuristic Design**: Dark gradient theme with neon cyan (`#00ffcc`) and pink (`#ff007a`) accents, glassy effects, and sleek typography using the Roboto font.
- **Particle Background**: Dynamic, interactive particle effect using Particles.js, with neon-colored particles and lines.
- **Local Images**: Custom images from the `./images/` directory on each page, styled with hover zoom and neon effects.
- **Social Media Links**: Icons for X, Facebook, Instagram, GitHub, WhatsApp, and Email in the footer of all pages, larger on Contact page.
- **Interactive Animations**:
  - Pulsing logo in the header.
  - Hover underlines and lift effects on navigation links.
  - Scroll-triggered fade-in for page sections.
  - Glowing text and form fields on hover/focus.
  - Dynamic button scaling and form submission feedback.
- **Pages**:
  - **Home**: A welcoming landing page with a hero section and image.
  - **About**: Personal bio with an image.
  - **Work**: Showcase of projects with an image.
  - **Contact**: Contact details, an image, and a Formspree-powered form.
- **Responsive Layout**: Adapts to mobile and desktop with a collapsible navigation menu.

## Project Structure
personal-website/
├── images/           # Folder for local images (e.g., home.jpg, about.jpg)
├── index.html       # Home page
├── about.html       # About page
├── work.html        # Work page
├── contact.html     # Contact page with Formspree form
├── styles.css       # Futuristic styling with animations
├── script.js        # Navigation toggle and form handling
└── README.md        # Project documentation


## Setup
1. **Clone or Download**:
   - Copy all files into a single folder on your computer.
2. **Install Dependencies**:
   - No local installs needed. The site uses:
     - Roboto font via Google Fonts CDN.
     - Particles.js via CDN (`https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js`).
     - Simple Icons via CDN for social links.
   - Requires an internet connection for CDNs; offline use skips these features.
3. **Add Local Images**:
   - Create an `images` folder in the project directory.
   - Add your images (e.g., `home.jpg`, `about.jpg`, `work.jpg`, `contact.jpg`).
   - Ensure filenames match the `src` attributes in HTML.
4. **Update Social Links**:
   - In each HTML file, replace placeholder URLs in `.social-links` with your profiles (e.g., `https://x.com/yourusername`, `mailto:your-email@example.com`).
5. **Run Locally**:
   - Open `index.html` in a web browser to view the site.
   - Test navigation, animations, images, social links, and form submission.

## Customization
- **Content**:
  - Edit placeholders in HTML (e.g., `[Your Name]`, `[your interests]`, `[your-email@example.com]`).
  - Update `work.html` with your projects.
- **Images**:
  - Replace filenames in `src` attributes (e.g., `./images/my-home-pic.png`).
  - Adjust `.page-image` in `styles.css` for size or effects.
- **Social Links**:
  - Update `href` values in `.social-links` with your actual profiles.
  - Modify `.social-icon` size (e.g., `width: 30px`) or hover effects in `styles.css`.
- **Styling**:
  - Modify `styles.css`:
    - Colors: Change `#00ffcc` or `#ff007a`.
    - Font: Update Google Fonts link and `font-family`.
    - Animations: Adjust timing or effects.
  - Example: Change social icon color:
    ```css
    .social-icon { filter: invert(1) hue-rotate(300deg); }
    ```
- **Particles**:
  - Edit `particlesJS` config in HTML (e.g., `"color": { "value": "#ffffff" }`).

## Contact Form Integration with Formspree
The contact form in `contact.html` uses [Formspree](https://formspree.io/):
1. **Sign Up**:
   - Create a free Formspree account and click "New Form."
2. **Get Endpoint**:
   - Set your email and copy the endpoint (e.g., `https://formspree.io/f/xexampleid`).
3. **Update HTML**:
   - In `contact.html`, replace the `action` attribute:
     ```html
     <form id="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
     ```
4. **Test Live**:
   - Deploy and submit the form. Check your email.

## Deployment
To make the site live:
1. **Choose a Platform**:
   - [GitHub Pages](https://pages.github.com/)
   - [Netlify](https://www.netlify.com/)
   - [Vercel](https://vercel.com/)
2. **Upload Files**:
   - Include all files and the `images` folder.
3. **Verify**:
   - Test the live URL for navigation, animations, images, social links, and form functionality.

## Technical Details
- **HTML**: Static pages with inline scripts and social links.
- **CSS**:
  - Uses animations (`@keyframes`) and transitions.
  - Responsive design with media queries and flexbox.
- **JavaScript**:
  - `script.js`: Nav toggle and form feedback.
  - Inline `<script>`: Scroll animations and Particles.js.
- **Dependencies**:
  - Google Fonts (`Roboto`) via CDN.
  - Particles.js via CDN.
  - Simple Icons via CDN.
  - Formspree for form submissions (optional).

## Troubleshooting
- **Images Not Showing**: Verify `images` folder and `src` paths.
- **Social Icons Not Loading**: Check internet for CDN.
- **Form Not Sending**: Confirm Formspree endpoint and deployment.

## Future Enhancements
- Add a portfolio gallery with hover zoom on `work.html`.
- Integrate AJAX for form submission (Formspree Gold).
- Enhance social links with tooltips.

## License
Open for personal use and modification. Share or adapt freely!

## Credits
- Created on February 27, 2025.
- Built with Particles.js and Simple Icons.