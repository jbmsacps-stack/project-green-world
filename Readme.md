<div align="center">

<img src="https://img.shields.io/badge/Project-Green%20World-2d6a4f?style=for-the-badge&labelColor=1b4332" />

<h1>Project Green World</h1>

<h3>A bilingual climate awareness website built to explain global warming through simple articles, Tamil support, educational media, and responsible action links.</h3>

<p>
Project Green World is a free, non-commercial Global Warming awareness website created to help students, families, general readers, and Tamil-speaking visitors understand climate change in a clear and accessible way.
</p>

<p>
The project currently focuses on explaining the causes, effects, solutions, donation/support references, and educational limitations of climate awareness content through a lightweight static website.
</p>

<p>
  <a href="https://jbmsacps-stack.github.io/project-green-world/client/index.html">
    <img src="https://img.shields.io/badge/Live%20Website-Visit%20Project-40916c?style=for-the-badge" />
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/Status-Active%20Development-f4a261?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Stage-Working%20Build-52b788?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Purpose-Education%20%26%20Awareness-74c69d?style=for-the-badge" />
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
</p>

</div>

---

## Overview

**Project Green World** is a static, bilingual climate awareness website focused on explaining Global Warming in a simple, readable, and responsible way.

The website is built using core frontend technologies and is designed as an educational project rather than a commercial product. It currently includes article-style pages, Tamil language support, embedded educational videos, support/donation references, and a disclaimer explaining the limits of the information shared.

The goal is not only to show information, but to make climate awareness easier to read, easier to understand, and easier to share.

> Project Green World does not collect payments, donations, personal information, or user accounts.

---

## Live Website

Visit the live website:

**https://jbmsacps-stack.github.io/project-green-world/client/index.html**

---

## Project Highlights

| Highlight | Description |
| --- | --- |
| **Bilingual Content** | Supports English and Tamil through a lightweight JavaScript language switcher |
| **Awareness Articles** | Causes, Effects, and Solutions are written in long-form readable article style |
| **Educational Videos** | Selected YouTube embeds are used to visually support climate topics |
| **Donation References** | Donate page lists external official support links instead of collecting money directly |
| **Disclaimer Page** | Explains educational purpose, limits, external links, donation responsibility, and copyright care |
| **Responsive Layout** | Designed for desktop, tablet, and mobile screens |
| **Static Website** | No backend, database, login system, or paid hosting required |
| **GitHub Pages Hosting** | Publicly accessible through a simple static deployment flow |

---

## Current Project State

Project Green World is currently a working static website under active improvement.

The main structure is complete, and the project now has dedicated pages for:

- Home
- Causes of Global Warming
- Effects of Global Warming
- Solutions for Global Warming
- Donate / Support Climate Action
- Disclaimer

The project is still being refined in areas such as content depth, translation quality, mobile polish, visual branding, citations, and final consistency across all pages.

---

## Main Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Introduces the project, visual identity, and navigation to major sections |
| `causes.html` | Explains the causes of global warming in article format |
| `effects.html` | Explains the effects of global warming on people, nature, oceans, health, food, and homes |
| `solutions.html` | Presents practical solutions such as clean energy, transport, forests, waste reduction, and awareness |
| `donate.html` | Provides external official support links for environmental protection, climate action, and relief |
| `disclaimer.html` | Clarifies educational purpose, limits, external links, donation responsibility, and content ownership |

---

## Key Features

### 1. English and Tamil Language Support

The website includes a simple bilingual system using `data-en` and `data-ta` attributes.

Example:

```html
<h3
  data-en="Causes of Global Warming"
  data-ta="உலக வெப்பமயமாதலின் காரணங்கள்">
  Causes of Global Warming
</h3>
````

JavaScript reads these attributes and switches the visible text without reloading the page.

This keeps the website:

* Lightweight
* Fully static
* Easy to extend
* Beginner-friendly
* Useful for Tamil-speaking visitors

---

### 2. Article-Style Climate Pages

The earlier card-based placeholders have been improved into longer article-style sections.

Current content includes:

* Causes of global warming
* Effects of global warming
* Practical solutions
* Awareness-focused explanations
* Tamil translations
* Embedded educational videos
* Final reflection sections
* Continue-learning cards

The content is written to be understandable for students, families, and general readers instead of sounding like a technical report.

---

### 3. Educational YouTube Embeds

Some pages include embedded YouTube videos to help visitors understand climate topics visually.

The videos are placed after relevant article sections instead of being shown immediately at the top. This keeps the reading flow natural:

```txt
Explanation
↓
Related video
↓
Next topic
```

This helps the page feel more educational and less cluttered.

---

### 4. Donate / Support Page

The Donate page does not collect money directly.

Instead, it provides external official support links related to:

* Environmental protection
* Climate action
* Relief and recovery
* Tamil Nadu / India-focused environmental support
* Wildlife and habitat restoration

The page also warns visitors to verify official websites, payment details, and organization purpose before donating.

---

### 5. Disclaimer and Responsibility

The Disclaimer page explains that Project Green World is an educational awareness project.

It covers:

* Educational purpose
* No professional advice
* Content accuracy limits
* External links
* Donation responsibility
* Media and copyright
* Final visitor responsibility

This makes the project more transparent and responsible.

---

### 6. Responsive Design

The layout is built to work across different screen sizes.

Current responsive work includes:

* Mobile-friendly navigation
* Flexible card grids
* Article hero mobile fixes
* Responsive embedded videos
* Safe page width handling
* Improved text spacing
* Overflow prevention

The mobile layout is still being polished, but the base responsive system is already active.

---

### 7. Lightweight Frontend Architecture

Project Green World is intentionally built with:

* HTML
* CSS
* Vanilla JavaScript

There are no frameworks, build tools, databases, or backend services.

This makes the project:

* Easy to understand
* Easy to host
* Easy to maintain
* Suitable for GitHub Pages
* Strong for demonstrating frontend fundamentals

---

## Tech Stack

| Layer           | Technology                       |
| --------------- | -------------------------------- |
| Structure       | HTML5                            |
| Styling         | CSS3                             |
| Logic           | Vanilla JavaScript               |
| Translation     | `data-en` / `data-ta` attributes |
| Media           | YouTube embeds                   |
| Responsiveness  | CSS media queries                |
| Hosting         | GitHub Pages                     |
| Version Control | Git and GitHub                   |

---

## Project Structure

```txt
project-green-world/
│
├── README.md
│
└── client/
    ├── index.html
    ├── causes.html
    ├── effects.html
    ├── solutions.html
    ├── donate.html
    ├── disclaimer.html
    ├── common.css
    ├── home.css
    ├── main.js
    ├── images/
    └── project logo / nature / climate assets
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

Open this file in your browser:

```txt
client/index.html
```

For a smoother development workflow, use the VS Code Live Server extension.

---

## Running with VS Code Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `client/index.html`.
4. Select **Open with Live Server**.

---

## Current Improvements Completed

* Built a multi-page climate awareness website
* Added English and Tamil language switching
* Created a responsive navigation system
* Added article-style Causes page
* Added article-style Effects page
* Added article-style Solutions page
* Improved Donate page with official external support links
* Added a stronger Disclaimer page
* Added embedded YouTube learning videos
* Added redirect cards between major pages
* Improved mobile hero layout
* Added custom logo direction for the project
* Deployed the website through GitHub Pages

---

## Still Being Improved

* Final Tamil translation polish
* More source references for climate claims
* More consistent page spacing
* Better mobile navigation refinement
* Final favicon/logo replacement
* README screenshots
* Page-specific SEO metadata
* Better Open Graph preview image
* More polished donation/support page organization
* Final content proofreading

---

## Roadmap

* [x] Create static multi-page website
* [x] Add bilingual English/Tamil support
* [x] Add Causes article page
* [x] Add Effects article page
* [x] Add Solutions article page
* [x] Add Disclaimer page
* [x] Add Donate / Support page
* [x] Add embedded educational videos
* [x] Deploy using GitHub Pages
* [ ] Add final logo and favicon across all pages
* [ ] Add screenshots to README
* [ ] Add verified references section
* [ ] Improve Tamil translation consistency
* [ ] Improve mobile navigation polish
* [ ] Add stronger SEO and Open Graph metadata
* [ ] Final responsive QA testing
* [ ] Prepare a stable public version

---

## Important Disclaimer

Project Green World is created for educational and awareness purposes only.

The information on this website is written in a simple way for general understanding. It should not be treated as professional scientific advice, legal advice, medical advice, financial advice, environmental consultation, or official government guidance.

Visitors should verify important climate-related information through trusted scientific, educational, and government sources.

Project Green World does not collect donations directly. Any donation or support links shown on the website lead to external organization pages. Visitors should verify the organization, website, purpose, and payment details before donating.

---

## Copyright and Usage Terms

**Project Green World**
Copyright © 2026 Joshua Baskar. All rights reserved.

| Use Case                                     | Status                      |
| -------------------------------------------- | --------------------------- |
| Personal learning and study                  | Permitted                   |
| Private experimentation                      | Permitted                   |
| Sharing with proper credit                   | Permitted                   |
| Academic reference with attribution          | Permitted                   |
| Public publishing under another name         | Written permission required |
| Commercial or monetized use                  | Written permission required |
| Redistribution under a different identity    | Not permitted               |
| Claiming ownership of the project or content | Not permitted               |

Unauthorized use may be subject to applicable copyright and intellectual property law.

---

## Author

<div align="center">

**Joshua Baskar**
*Aspiring Full-Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-jbmsacps--stack-181717?style=for-the-badge\&logo=github)](https://github.com/jbmsacps-stack)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-joshua--baskar-0077B5?style=for-the-badge\&logo=linkedin)](https://www.linkedin.com/in/joshua-baskar-2b4a88381/)

</div>

---

## Collaboration

Feedback and suggestions are welcome, especially in areas that improve the educational quality and accessibility of the project.

Areas where feedback is useful:

* Climate content review
* Tamil translation improvements
* Accessibility suggestions
* UI and responsive design improvements
* Verified educational resources
* Donation/support link review
* README and documentation improvement

---

<div align="center">

### Take Global Warming Seriously

**The Earth does not need empty concern. It needs awareness, responsibility, and action.**

If this project helped you understand climate awareness better, consider giving the repository a star.

</div>
```
