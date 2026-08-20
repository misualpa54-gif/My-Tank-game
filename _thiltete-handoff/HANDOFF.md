# Handoff — Thiltete Tank Game

This folder is a **staging area**, not part of the Tank Realms project. It exists only
because the agent session that built Thiltete Tank Game had a GitHub token scoped to
`My-Tank-game` alone and could not push to the new repo.

Everything needed to populate <https://github.com/misualpa54-gif/ThilteteTankGame>
is here, plus a git bundle carrying the full commit history.

## Contents

| Path | What it is |
|---|---|
| `dist/ThilteteTankGame.html` | **The game.** One self-contained file, 873 KB. Open it in any browser. |
| `dist/index.html` | Redirect shim so a Pages root URL launches the game |
| `dist/manifest.webmanifest`, `dist/sw.js`, `dist/icon-*.png` | PWA pack (installable + offline) |
| `src/` | Editable sources: `body.html`, `styles.css`, `game.js`, `sw-register.js` |
| `vendor/three.min.js` | Three.js r128, vendored |
| `tools/build.js` | Dependency-free bundler → `dist/ThilteteTankGame.html` |
| `docs/COMPARISON.md` | Full provenance: how this build was merged from two ancestors |
| `README.md` | The README intended for the new repo |
| `dot-gitignore` | Rename to `.gitignore` in the new repo |
| `ThilteteTankGame.bundle` | **Complete git repo with history** (659 KB) |

## Restoring the full repo from the bundle

```bash
git clone ThilteteTankGame.bundle ThilteteTankGame
cd ThilteteTankGame
git remote set-url origin https://github.com/misualpa54-gif/ThilteteTankGame.git
git push -u origin main
```

That reproduces the repo exactly as built, commit message and all.

## Rebuilding the game from source

```bash
node tools/build.js
```

No dependencies, no package manager. Concatenates `src/` + `vendor/` into
`dist/ThilteteTankGame.html`.

## Once the new repo is populated

This folder should be deleted from `My-Tank-game` — it was only ever a delivery
mechanism. `My-Tank-game` is otherwise untouched and still holds the two original
ancestor builds for reference.
