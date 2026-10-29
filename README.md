# elfiabv.github.io

Personal website of Elfia Bezou-Vrakatseli. Plain HTML and CSS, no build step. GitHub Pages serves it straight from the `main` branch.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: photo, links, about, interests, highlights |
| `publications.html` | Publications, grouped by year |
| `talks.html` | Talks and tutorials, grouped by year |
| `projects.html` | Datasets and other projects |
| `cv.html` | CV summary and a download button |
| `style.css` | All styling. Change `--accent` at the top to re-colour the site |
| `assets/photo.jpg` | Profile photo (square, about 640×640) |
| `assets/Elfia_Bezou-Vrakatseli_CV.pdf` | The downloadable CV |

## Common edits (directly on GitHub)

Open a file, click the pencil icon, edit, then click **Commit changes**. The site updates in about a minute.

**Add a publication.** In `publications.html`, copy an existing `<li class="entry"> … </li>` block, paste it at the top of the right year and change the text and links. For a new year, copy a whole `<section class="year-group"> … </section>` block.

**Add a talk.** Do the same in `talks.html`.

**Update the CV PDF.** Upload a new file with exactly the same name (`assets/Elfia_Bezou-Vrakatseli_CV.pdf`) and it replaces the old one.

**Change the photo.** Upload a new square image as `assets/photo.jpg`.

**Change the icon links.** They are repeated in the header of `index.html` and in the footer of every page. Search each file for the old URL.

## Credits

Icons from [Font Awesome Free](https://fontawesome.com/license/free) (CC BY 4.0).
