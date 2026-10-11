# Chronicles of Eternia

The official website for Chronicles of Eternia.

It's a plain static site: HTML, one stylesheet and one script, with no build step or dependencies.

## Layout

```
public/                  web root, deployed as-is
  index.html             /
  play/how-to/index.html /play/how-to
  media/index.html       /media
  404.html
  css/main.css
  js/main.js             mobile nav, hero video, image lightbox
  img/, fonts/, favicons, hero.mp4
originals/               full-size source media (not deployed)
```

The `<head>`, nav and footer are repeated in each page. If you change one, change them all.
Icons are inline Font Awesome 6 SVGs (CC BY 4.0).

## Local preview

Serve the `public` folder with any static server, for example:

```bash
npx serve public
# or
python -m http.server -d public 3000
```

Opening the files directly with `file://` won't work, because the pages use root-relative paths like `/css/main.css`.

## Deploying

The site is served from the root of `public_html` on the chronicles-of-eternia.com cPanel host,
next to the wiki (`/w`, `/wiki`) and forum (`/forum`). Copy the contents of `public/` there.

Don't overwrite the server's root `.htaccess` or `robots.txt`; they also serve the wiki and forum.
