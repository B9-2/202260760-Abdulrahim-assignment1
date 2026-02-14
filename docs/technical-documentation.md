# Technical Documentation (Assignment 1)

## Project Overview
This project is a simple portfolio website built with HTML, CSS, and JavaScript. It contains three main sections: About Me, Projects, and Contact.

## Folder Structure
- `index.html` — Main page structure
- `css/styles.css` — Page styling + responsive rules + dark mode styles
- `js/script.js` — JavaScript interactivity (theme toggle)
- `assets/images/` — Images used in the Projects section
- `docs/ai-usage-report.md` — AI usage report
- `docs/technical-documentation.md` — This document

## HTML Structure (index.html)
- `<main id="container">` wraps the whole page content.
- Sections:
  - `#about` — short intro + tagline
  - `#projects` — ordered list of projects, each project has a title, description, and image
  - `#contact` — contact form with name, email, and message

## CSS Styling (css/styles.css)
- Centered layout using `#container` with a max-width.
- Section separation using borders, padding, and margins.
- Images are responsive using `max-width: 100%` and `height: auto`.
- Contact form styling:
  - Labels are block elements.
  - Inputs/textarea have consistent padding.
- Responsive behavior:
  - A media query (`@media (max-width: 600px)`) makes inputs/textarea full width on small screens.
- Dark mode:
  - The `.dark` class changes background and text colors.
  - Section borders and button styling change in dark mode.

## JavaScript Interactivity (js/script.js)
### Dark/Light Mode Toggle
- A button with `id="themeToggle"` toggles dark mode.
- On click:
  - Adds/removes the `dark` class on the `<body>`.
  - Updates the button text between "Dark mode" and "Light mode".

## How to Run Locally
1. Open the project folder in VS Code.
2. Open `index.html` in a browser, or use the VS Code Live Server extension.