# Your Proposal Site 💌

## How to personalize it (do this first!)
Open **script.js** and edit the `CONFIG` object at the very top. That's the only place you need to touch for content:
- `metSince` — the date you met (powers the live countdown)
- `gallery`, `memories`, `wishes`, `reasons` — your own captions/text
- `quiz` — your 10 "how well do you know us" questions
- `letter` — your secret love letter text
- `tracks` — paths to your music files

## Adding real photos
Right now photo spots use soft gradient placeholders + emoji so the site works instantly with zero setup.
To use real photos: drop images into `assets/images/`, then in `script.js` swap the `style="background:..."` gradients for `style="background-image:url('assets/images/yourphoto.jpg'); background-size:cover;"` in `initGallery()` and `initMemorySlider()`.

## Adding music
Drop up to 3 MP3 files into `assets/music/` named to match the `tracks` array in `script.js` (or update the paths). Browsers block autoplay with sound until the user interacts — clicking the big heart on the landing page counts as that interaction, so music will start right after.

## Running it
Just open `index.html` in a browser — no build step, no server needed. To share it, you can upload the whole folder to any static host (Netlify, GitHub Pages, Vercel) or zip it and send it directly.

## Files
- `index.html` — structure/content
- `style.css` — the pastel glassmorphism design system + all animations
- `script.js` — all interactivity: particles, games, quiz, proposal logic, music player
- `assets/` — put your images and music here
