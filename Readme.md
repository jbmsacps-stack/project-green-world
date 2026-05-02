<div align="center">

<img src="https://img.shields.io/badge/Project-Green%20World-2d6a4f?style=for-the-badge&labelColor=1b4332" />

<h1>Project Green World</h1>

<h3>A bilingual climate awareness website built for education, accessibility, and responsible action.</h3>

<p>
Project Green World is a free, non-commercial Global Warming awareness website designed to explain climate causes, effects, solutions, and support resources in a clear and accessible way.  
It is built for students, general readers, and Tamil-speaking communities who need simple, trustworthy environmental awareness content.
</p>

<p>
  <a href="https://jbmsacps-stack.github.io/project-green-world/client/index.html">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-40916c?style=for-the-badge" />
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/Status-Under%20Development-f4a261?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Version-v0.1-52b788?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-Custom%20Terms-74c69d?style=for-the-badge" />
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-Interactive-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Accessibility-ARIA-40916c?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Hosting-GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white" />
</p>

</div>

---

## Overview

**Project Green World** is a static, multi-page awareness platform focused on Global Warming and environmental responsibility.

The website explains climate-related topics through structured pages, bilingual content support, accessible layout decisions, and a lightweight frontend architecture. The goal is not just to display information, but to make climate awareness easier to understand, easier to share, and easier to access.

> This project is non-commercial. It does not collect payments, donations, or user data.

---

## Demo

### Live Website

Visit the live version here:

**https://jbmsacps-stack.github.io/project-green-world/client/index.html**

### Screenshots

> Add your screenshots here after taking full-page captures of the website.

```md
![Project Green World Homepage](./screenshots/homepage.png)
![Causes Page](./screenshots/causes-page.png)
![Mobile View](./screenshots/mobile-view.png)
````

Recommended screenshot folder:

```txt
project-green-world/
│
├── screenshots/
│   ├── homepage.png
│   ├── causes-page.png
│   └── mobile-view.png
```

---


| Highlight                   | Value                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------- |
| **Bilingual Experience**    | Supports both English and Tamil using a lightweight JavaScript-based language switcher |
| **Static Architecture**     | Runs without backend, database, authentication, or paid hosting                        |
| **Accessible Structure**    | Uses semantic HTML, ARIA labels, readable hierarchy, and keyboard-friendly design      |
| **Responsive UI**           | Designed for desktop, tablet, and mobile screens                                       |
| **No Framework Dependency** | Built with core HTML, CSS, and JavaScript to demonstrate strong fundamentals           |
| **Awareness-First Design**  | Focuses on education, clarity, and responsible climate communication                   |
| **GitHub Pages Deployment** | Publicly hosted with a simple and maintainable deployment flow                         |

---

## Key Engineering Highlights

### 1. Lightweight Static Architecture

Project Green World is intentionally built as a static website.

This keeps the project:

* Fast to load
* Easy to host
* Simple to maintain
* Free to deploy
* Accessible without login barriers
* Suitable for GitHub Pages hosting

No backend is required because the project focuses on awareness content, page navigation, language switching, and user interaction.

---

### 2. English–Tamil Language Switcher

The language system uses custom HTML data attributes:

```html
<h3
  data-en="Causes of Global Warming"
  data-ta="உலக வெப்பமயமாதலின் காரணங்கள்">
  Causes of Global Warming
</h3>
```

JavaScript reads the `data-en` and `data-ta` values and updates page text instantly.

This approach keeps the website:

* Fully static
* Easy to extend
* Lightweight
* Beginner-friendly
* Suitable for bilingual educational content

---

### 3. Semantic and Accessible HTML

The site uses meaningful HTML structure instead of generic layout-only markup.

Examples include:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

This improves:

* Accessibility
* SEO readability
* Screen reader support
* Code maintainability
* Professional frontend structure

---

### 4. Responsive Design System

The layout is designed to adapt across common device sizes using CSS media queries, flexible sections, and card-based layouts.

The design considers:

* Mobile navigation
* Readable spacing
* Flexible card grids
* Image scaling
* Overflow handling
* Touch-friendly interaction areas

---

## Features

### Awareness Pages

| Page              | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| `index.html`      | Introduces the project and its mission                         |
| `causes.html`     | Explains the major causes of Global Warming                    |
| `effects.html`    | Shows the impact of climate change on Earth and human life     |
| `solutions.html`  | Presents practical actions and climate solutions               |
| `donate.html`     | Provides trusted external support and donation references      |
| `disclaimer.html` | Clarifies educational purpose, responsibility, and limitations |

---

### Bilingual Support

* English ↔ Tamil language switching
* Built using `data-en` and `data-ta` attributes
* No backend required
* No page reload required
* Designed for regional accessibility

---

### User Interaction

* Native browser share button
* Clipboard fallback for unsupported browsers
* Interactive card hover effects
* Navigation hover states
* Button feedback effects

---

### Accessibility and SEO

* Semantic HTML5 layout
* ARIA labels for navigation and buttons
* Clear heading hierarchy
* Keyboard focus styles
* Meta descriptions
* SEO-friendly page titles
* Open Graph-ready structure

---

## Tech Stack

| Layer              | Technology                                    |
| ------------------ | --------------------------------------------- |
| Structure          | HTML5                                         |
| Styling            | CSS3                                          |
| Logic              | Vanilla JavaScript                            |
| Language Switching | JavaScript + `data-en` / `data-ta` attributes |
| Responsiveness     | CSS Media Queries                             |
| Accessibility      | Semantic HTML, ARIA labels, focus states      |
| SEO                | Meta tags, page titles, structured headings   |
| Hosting            | GitHub Pages                                  |

> No frameworks. No UI libraries. No build tools.
> The project is built to demonstrate clean frontend fundamentals.

---

## Project Structure

```txt
project-green-world/
│
├── README.md
├── images/
│   └── LeafLogoTemp.jpg
│
└── client/
    ├── index.html          # Home page
    ├── causes.html         # Causes of Global Warming
    ├── effects.html        # Effects on the planet and people
    ├── solutions.html      # Practical climate solutions
    ├── donate.html         # External support and donation links
    ├── disclaimer.html     # Educational disclaimer
    ├── common.css          # Shared global styles
    ├── home.css            # Home page specific styles
    └── main.js             # Language switcher and interactions
```

---

## Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/jbmsacps-stack/project-green-world.git
```

### 2. Open the project folder

```bash
cd project-green-world
```

### 3. Open the website

Open this file directly in your browser:

```txt
client/index.html
```

Or use VS Code Live Server for a smoother development experience.

---

## Running with VS Code Live Server

1. Open the project in VS Code
2. Install the **Live Server** extension
3. Right-click `client/index.html`
4. Click **Open with Live Server**

The project should now run locally in your browser.

---

## Current Development Status

Project Green World is currently under active development.

Current focus areas:

* Replacing placeholder content with researched climate information
* Improving Tamil translations
* Adding educational images with proper alt text
* Expanding the Donate page with verified official links
* Improving SEO metadata
* Adding screenshots to the README
* Final mobile polish and QA testing

---

## Roadmap

* [ ] Replace placeholder content with researched information
* [ ] Add credible references for climate-related claims
* [ ] Improve English and Tamil content quality
* [ ] Add educational images with descriptive alt text
* [ ] Add screenshots to README
* [ ] Improve mobile navigation polish
* [ ] Add embedded educational videos where useful
* [ ] Expand Donate page with verified links
* [ ] Improve SEO and Open Graph metadata
* [ ] Prepare a stable public release

---

## Disclaimer

The information on this website is for awareness and educational purposes only.

The creator is not a certified scientist, climate expert, environmental researcher, or official climate authority. Future content will aim to reference credible and trusted sources, but users are encouraged to verify important information from official scientific and government sources.

Project Green World does not collect donations directly. Any external donation or support links should be verified by users before taking action.

---

## Copyright and Usage Terms

**Project Green World**
Copyright © 2026 Joshua Baskar. All rights reserved.

| Use Case                                  | Status                      |
| ----------------------------------------- | --------------------------- |
| Personal learning and study               | Permitted                   |
| Private forking and experimentation       | Permitted                   |
| Sharing with proper attribution           | Permitted                   |
| Academic reference with credit            | Permitted                   |
| Public publishing under another name      | Written permission required |
| Commercial or monetized use               | Written permission required |
| Redistribution under a different identity | Not permitted               |
| Claiming ownership of any part            | Not permitted               |

Unauthorized use may be subject to applicable intellectual property and copyright law.

---

## Author

<div align="center">

**Joshua Baskar**
*Aspiring Full-Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-jbmsacps--stack-181717?style=for-the-badge\&logo=github)](https://github.com/jbmsacps-stack)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-joshua--baskar-0077B5?style=for-the-badge\&logo=linkedin)](https://www.linkedin.com/in/joshua-baskar-2b4a88381/)

</div>

---

## Collaboration and Contact

I am open to feedback, suggestions, and collaboration that can improve the quality, accessibility, and educational value of this project.

Areas where collaboration is welcome:

* Climate content review
* Tamil translation improvements
* Accessibility suggestions
* UI and responsive design improvements
* Educational resources and verified references

For collaboration or professional contact, reach me through GitHub or LinkedIn.

---

<div align="center">

### Take Global Warming Seriously

**The Earth does not need empty concern. It needs awareness, responsibility, and action.**

If this project helped you understand climate awareness better, consider giving the repository a star.

</div>
```


```md
License-Custom Terms
```
