🇧🇷 [Ler em Português](site-README.pt-BR.md)

# NovaHidráulica — Portfolio Landing Page

An example landing page for the industrial hydraulic maintenance niche, used as
a portfolio piece to show to real clients. **This is a demo/portfolio project —
the brand name and contact details are fictional or belong to the developer; it
is not affiliated with any real company.**

## Project structure

```
novahidraulica/
├── index.html      # Page markup
├── style.css        # Styles and responsiveness (desktop, tablet, mobile)
├── script.js         # Mobile menu, scrollspy, portfolio carousel, scroll animations
└── Imagens/          # Only the real supplier logos (industry brands)
```

## About the images

Portfolio photos, Instagram posts, and the workshop interior photo were replaced
with styled placeholders (icon + caption) directly in the HTML/CSS — no photos
are required for the site to work and look visually complete. When real project
photos are available, just swap the corresponding `item-trabalho-placeholder`
block for an `<img>` tag. The logos in `Imagens/Fornecedores/` are real industry
brands (Aeroquip, Danfoss, Eaton, etc.), used only as a parts-compatibility
reference — those can stay as they are.

## How to publish with GitHub Pages (free hosting)

1. Create a new GitHub repository (it can be public).
2. Upload these files (and the `Imagens/` folder) to the repository.
3. Go to **Settings → Pages**.
4. Under "Branch", select `main` (or `master`) and the `/root` folder, then click **Save**.
5. Within a few minutes GitHub generates a public link, something like:
   `https://xf1lps.github.io/landing-page-sp-hidraulicos/`

## Site contact

The "Contact Us" / "Get a Quote" buttons and the footer social links point to
the developer's (Philipe's) WhatsApp and Instagram — so anyone who visits this
portfolio piece and clicks lands directly in a conversation with you.

## Tech stack

- HTML5, CSS3, and vanilla JavaScript (no frameworks)
- Icons: [Lucide Icons](https://lucide.dev/)
