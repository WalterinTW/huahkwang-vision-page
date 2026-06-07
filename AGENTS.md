# AGENTS.md

## Project identity
Project name: huahkwang-vision-page

This project is a single-page static website for Huah Kwang Temple vision content.
All naming must use `huah kwang`, not `huakuang`.

## Project goal
Build a clean, dignified, responsive single-page website in Traditional Chinese for the future vision of Huah Kwang Temple.

This page should clearly present the three main directions:
- 宗教弘法
- 社會慈善
- 教育發展

The page is not a history page and not an event page.
It is a vision / mission page focused on future direction, values, and long-term commitment.

## Site structure
Root page:
- `index.html`

Shared assets:
- `assets/css/style.css`
- `assets/js/script.js`

Optional icon assets:
- `assets/icons/dharma-wheel.svg`
- `assets/icons/hands-heart.svg`
- `assets/icons/child-sprout.svg`

Content files:
- `content_manifest.md`
- `image_mapping.md`
- `final_copy_zh.md`

## Content source of truth
Use these files as the source of truth:
- `content_manifest.md`
- `image_mapping.md`
- `final_copy_zh.md`

Do not invent extra doctrinal claims, historical facts, or new sections not supported by these files.

## Page role
`index.html` is the full page.

It should include:
- Hero section
- Page introduction
- Three vision direction overview cards or blocks
- Three detailed direction sections
- Overall vision section
- Closing / footer section

## Design reference
Use this site as visual inspiration only:
https://fagushan.ddm.org.tw/

Do not copy the source code or duplicate the layout exactly.

Capture these qualities instead:
- calm Buddhist cultural atmosphere
- dignified and restrained presentation
- clear section hierarchy
- elegant whitespace
- readable Traditional Chinese typography
- strong homepage title presence
- stable visual rhythm
- image/icon-supported layout without feeling commercial

## Design direction
Keywords:
- dignified
- serene
- restrained
- readable
- hopeful
- clear
- temple-like

Preferred color feeling:
- off-white
- beige
- light stone
- warm gray
- muted wood / earth tones
- restrained gold-brown accents if needed

Avoid:
- flashy animations
- strong commercial marketing feeling
- overly bright color blocks
- decorative fonts that reduce readability
- cluttered layouts
- copying the reference site too literally

## Typography and layout
- prioritize readability in Traditional Chinese
- use semantic HTML
- maintain clear heading hierarchy
- keep generous spacing between sections
- support desktop and mobile well
- keep code beginner-friendly and easy to maintain

## Icon handling
This project mainly uses icons, not many photos.

The three main directions must use one primary icon each:
- 宗教弘法 → dharma wheel / temple
- 社會慈善 → hands / heart
- 教育發展 → child / sprout

If `assets/icons/` is empty, create these SVG files:
- `assets/icons/dharma-wheel.svg`
- `assets/icons/hands-heart.svg`
- `assets/icons/child-sprout.svg`

Icon requirements:
- simple
- elegant
- stylistically consistent
- calm and restrained
- suitable for a Buddhist cultural site
- not too cartoonish
- preferably outline or lightly filled SVG style
- compatible with the overall site palette

## Hero handling
The hero section does not need a large photo.
A clean visual treatment is preferred.

Recommended hero approach:
- soft light background
- subtle temple / stupa / dharma-wheel inspired visual motif
- clear title and subtitle
- elegant spacing
- calm tone

## Path rules
This site will be deployed on GitHub Pages.

Therefore:
- use relative paths everywhere
- do not use root-absolute paths like `/assets/...`
- CSS path from root page:
  - `assets/css/style.css`
- JS path from root page:
  - `assets/js/script.js`
- icon paths from root page:
  - `assets/icons/...`

All links and assets must be GitHub Pages safe.

## Implementation constraints
- static site only
- no framework required
- plain HTML/CSS/JS preferred
- keep structure simple
- do not over-engineer
- do not add unnecessary build tooling unless explicitly requested

## Content structure guidance
Follow the structure defined in `final_copy_zh.md` and `content_manifest.md`.

The page should clearly separate:
1. Hero
2. Page introduction
3. 宗教弘法
4. 社會慈善
5. 教育發展
6. 整體願景
7. Closing section

The three main directions should be easy to scan visually.
A card-style or section-block structure is acceptable.

## Image and icon usage guidance
Follow `image_mapping.md`.

Important rules:
- the page should rely mainly on the three main icons
- do not overuse decorative visuals
- keep the visual rhythm clean and spacious
- if icons are generated, ensure the three icons share a unified style
- captions are optional unless clearly helpful
- do not invent detailed captions beyond the intended meaning in `image_mapping.md`

## GitHub Pages safety rules
- all asset references must use relative paths
- all CSS, JS, and icon references must work under a GitHub Pages project site
- avoid assumptions about server-side routing
- do not require backend features

## What done means
The task is complete only if:
1. `index.html` renders correctly
2. `assets/css/style.css` and `assets/js/script.js` are created and work
3. the three icons exist and are used properly if the icons folder was empty
4. the page is responsive
5. Traditional Chinese content is readable and well-spaced
6. the visual tone matches a calm, dignified temple website
7. the page is ready for GitHub Pages deployment

## Before finishing
Please verify:
- no broken paths
- no broken icon references
- no `huakuang` naming remains in new file names, visible headings, comments, or guidance
- all content follows the provided markdown files
- the page renders correctly on desktop and mobile
- the generated icons are consistent in style

## Playwright check workflow
This is a Huah Kwang Temple static website project.

After modifying HTML, CSS, or JavaScript, prioritize running the Playwright checks:
- `npm run test:visual`
- use `npm run test:visual:headed` when visual inspection in a browser is helpful
- use `npm run show-report` to review the HTML report after a run

Every website change should check:
- desktop layout
- mobile layout
- no horizontal overflow
- no console errors
- primary navigation links are still clickable
- important images and icons load correctly

Preserve the plain, restrained, dignified website style.
Do not make broad structural rewrites unless Walter explicitly asks.
Do not delete existing content or images unless Walter explicitly asks.
After finishing changes, list which files changed and how Walter can test them.
