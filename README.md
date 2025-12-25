Personal portfolio + project archive.
A living space to document things I’ve worked on — code, baking, art, and experiments.

## Exploration Admin Generator
- Purpose: Generate typed exploration posts via a UI and paste into the data source.
- Start dev: 
```
npm run dev
```
- Open: http://localhost:5173/explorations/admin (or the port shown in terminal)
- Use the form to fill in title, category, summary, hero image, tags, and sections.
- Click “Copy Output” to copy a ready-to-paste object.
- Paste into [src/explorations/data/explorationsData.ts](src/explorations/data/explorationsData.ts) inside `explorationsData`.

Notes
- `slug` auto-generates from title; you can edit it.
- `createdAt` is set when you start the post; feel free to adjust.
- Image paths can be from `public/` or `src/assets/images/...` depending on your bundling preference.
- Optional fields (like `heading`, `alt`, `caption`) are omitted when empty to keep output tidy.