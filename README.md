# My Personal Website

A responsive personal website built with HTML, CSS, and JavaScript, featuring a modern futuristic design with interactive animations and a particle background. The site includes four pages: Home, About, Work, and Contact, with a functional contact form powered by Formspree.

## Features
- **Modern Futuristic Design**: Dark gradient theme with neon cyan (`#00ffcc`) and pink (`#ff007a`) accents, glassy effects, and sleek typography using the Roboto font.
- **Particle Background**: Dynamic, interactive particle effect using Particles.js, with neon-colored particles and lines.
- **Interactive Animations**:
  - Pulsing logo in the header.
  - Hover underlines and lift effects on navigation links.
  - Scroll-triggered fade-in for page sections.
  - Glowing text and form fields on hover/focus.
  - Dynamic button scaling and form submission feedback.
- **Pages**:
  - **Home**: A welcoming landing page with a hero section.
  - **About**: Personal bio and interests.
  - **Work**: Showcase of projects or achievements.
  - **Contact**: Contact details and a Formspree-powered form.
- **Responsive Layout**: Adapts to mobile and desktop with a collapsible navigation menu.

## Project Structure

personal-website/
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
   - Requires an internet connection for CDNs; offline use skips these features.
3. **Run Locally**:
   - Open `index.html` in a web browser to view the site.
   - Test navigation (links or ☰ toggle), animations (scroll, hover, click particles), and form submission.
4. **Form Testing**:
   - Locally, the contact form shows a demo success message. For live functionality, configure Formspree (see below).

## Customization
- **Content**:
  - Edit placeholders in HTML files (e.g., `[Your Name]`, `[your interests]`, `[your-email@example.com]`).
  - Update `work.html` with your projects or achievements.
- **Styling**:
  - Modify `styles.css`:
    - Colors: Change `#00ffcc` or `#ff007a` to your palette.
    - Font: Update Google Fonts link and `font-family`.
    - Animations: Adjust timing or effects (e.g., `pulse` duration).
  - Example: Change particle background to a solid color:
    ```css
    #particles-js { background: #0a2e5a; }
    ```
- **Particles**:
  - Edit the `particlesJS` config in HTML:
    - `"color": { "value": "#ffffff" }` for white particles.
    - `"number": { "value": 50 }` for fewer particles.
    - See [Particles.js docs](https://particles.js.org/) for options.
- **Logo**:
  - Replace `My Site` in `.logo` with your name or brand.

## Contact Form Integration with Formspree
The contact form in `contact.html` uses [Formspree](https://formspree.io/):
1. **Sign Up**:
   - Create a free Formspree account and click "New Form."
2. **Get Endpoint**:
   - Set your email as the recipient and copy the endpoint (e.g., `https://formspree.io/f/xexampleid`).
3. **Update HTML**:
   - In `contact.html`, replace the `action` attribute:
     ```html
     <form id="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
     ```
4. **Test Live**:
   - Deploy and submit the form. Check your email for submissions.

## Deployment
To make the site live:
1. **Choose a Platform**:
   - [GitHub Pages](https://pages.github.com/)
   - [Netlify](https://www.netlify.com/)
   - [Vercel](https://vercel.com/)
2. **Upload Files**:
   - Include all files (`index.html`, `about.html`, etc.).
3. **Verify**:
   - Test the live URL for navigation, animations, particles, and form functionality.

## Technical Details
- **HTML**: Static pages with inline scroll animation and Particles.js scripts.
- **CSS**:
  - Uses CSS animations (`@keyframes`) and transitions for interactivity.
  - Responsive design with media queries.
- **JavaScript**:
  - `script.js`: Handles nav toggle and form feedback.
  - Inline `<script>`: Scroll animations and Particles.js config.
- **Dependencies**:
  - Google Fonts (`Roboto`) via CDN.
  - Particles.js via CDN.
  - Formspree for form submissions (optional).

## Troubleshooting
- **Particles Not Showing**: Check internet connection (CDN) or console for errors (e.g., wrong ID `#particles-js`).
- **Animations Not Working**: Verify browser support (e.g., Chrome, Firefox) and class names.
- **Form Not Sending**: Confirm Formspree endpoint and deployment.

## Future Enhancements
- Add a portfolio gallery with hover zoom on `work.html`.
- Integrate AJAX for form submission (Formspree Gold).
- Enhance particles with custom shapes or more interactivity.

## License
Open for personal use and modification. Share or adapt freely!

## Credits
- Created on February 27, 2025.
- Built with Particles.js for the dynamic background.