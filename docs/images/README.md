# Images

All visuals of the site, grouped by section, one folder per project:

```
images/
  architecture/       one folder per /arch/<slug> page (same name as the slug)
    archipelago/  farnsworth_house/  luthier_house/  toy_museum/
  computer_science/
    cards/            card images for /port/computer_science (cs-portfolio.json)
    cauldron_crud/  mima_discord_bot/  opengl_3d_renderer/
  game_design/        images used by the game design articles
    technical/  other_works/  dichotomies/  swapfold/
  essays/
    what_is_architecture/
  visualization/      renders for the parked visualization page
```

- Folder names follow `lower_case_with_underscore` (see the naming conventions in `_documentation/`).
- Referenced as `images/...` from `src/data/*.json` and as `/images/...` from Markdown in `src/content/`.
- Some files are not referenced by any page yet (extra renders, drafts); they are kept on purpose.
- Planned: these files move to a separate image server; the site will then link there instead of serving them from `public/`.
