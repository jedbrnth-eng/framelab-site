# Shelfcam support site

The public support page and privacy policy for **Shelfcam**, an iPhone camera app with classic film
cameras, disposables, instant cameras and Y2K digicams. The app itself is closed source; this repo
only holds the two web pages Apple requires for an App Store listing.

- Support page: https://jedbrnth-eng.github.io/framelab-site/
- Privacy policy: https://jedbrnth-eng.github.io/framelab-site/privacy.html

Both URLs are entered in App Store Connect as the app's Support URL and Privacy Policy URL, so
**don't rename this repo or move the files**: the links in the store listing would break. (The repo
is still called `framelab-site` because the app was called FRAME-LAB before it was renamed to
Shelfcam.)

## What's here

| File | What it is |
|---|---|
| `index.html` | Support page: one line about the app, how to report a problem (GitHub issues), link to the privacy policy |
| `privacy.html` | Privacy policy: Shelfcam collects no data; camera and add-to-Photos permissions; what stays on the phone |
| `style.css` | Shared dark styling for both pages |

No build step, no JavaScript, no trackers. GitHub Pages serves the files straight from the root of
`main`.

## Changing a page

1. Edit the HTML on a branch and open a pull request.
2. After it merges, GitHub Pages republishes within a minute or two. Check both URLs above.
3. If you change what the privacy policy says, also update the "Effective" date at the top of
   `privacy.html`, and make sure it still matches the app (permissions in the app's `project.yml`,
   no network code) and the App Privacy answers in App Store Connect.

## Support requests

Users report problems through this repo's
[Issues](https://github.com/jedbrnth-eng/framelab-site/issues), so keep Issues turned on.
