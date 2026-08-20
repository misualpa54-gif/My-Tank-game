#!/usr/bin/env node
/**
 * Thiltete Tank Game — single-file bundler.
 *
 * Assembles src/ + vendor/ into one self-contained HTML file that runs with zero
 * network requests: open it from a file://, a USB stick, or a static host and it
 * works identically. That property is the whole point of this project's delivery
 * model, so the build deliberately inlines everything rather than emitting links.
 *
 *   node tools/build.js
 *     -> dist/ThilteteTankGame.html
 *
 * Order of assembly matters:
 *   1. vendor/three.min.js   must define THREE before the game script parses
 *   2. src/styles.css        inlined into <style> in <head>
 *   3. src/body.html         markup
 *   4. src/game.js           the game itself
 *   5. src/sw-register.js    PWA registration (inert on file://)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const VENDOR = path.join(ROOT, 'vendor');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(DIST, 'ThilteteTankGame.html');

const TITLE = 'Thiltete Tank Game';

function read(p) {
  if (!fs.existsSync(p)) {
    console.error(`\n  ✗ missing required source file: ${path.relative(ROOT, p)}\n`);
    process.exit(1);
  }
  return fs.readFileSync(p, 'utf8');
}

const three = read(path.join(VENDOR, 'three.min.js'));
const styles = read(path.join(SRC, 'styles.css'));
const body = read(path.join(SRC, 'body.html'));
const game = read(path.join(SRC, 'game.js'));
const swReg = read(path.join(SRC, 'sw-register.js'));

// A closing </script> anywhere inside inlined JS would terminate the tag early.
// None of our sources contain one today, but the build must not be able to emit a
// silently broken file if that ever changes.
for (const [name, code] of [['three.min.js', three], ['game.js', game], ['sw-register.js', swReg]]) {
  if (/<\/script/i.test(code)) {
    console.error(`\n  ✗ ${name} contains a literal "</script" — it cannot be inlined safely.\n`);
    process.exit(1);
  }
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>${TITLE}</title>

    <!-- PWA: installable + offline. Inert when opened as a plain file:// page. -->
    <link rel="manifest" href="manifest.webmanifest">
    <meta name="theme-color" content="#1a0a2e">
    <link rel="apple-touch-icon" href="icon-192.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <style>
${styles}
    </style>
</head>
<body>
${body}
<script>
${three}
</script>
<script>
${game}
</script>
<script>
${swReg}
</script>
</body>
</html>
`;

fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(OUT, html, 'utf8');

const kb = (n) => (n / 1024).toFixed(0) + ' KB';
console.log(`
  ✓ built ${path.relative(ROOT, OUT)}

    three.min.js   ${kb(three.length).padStart(8)}
    game.js        ${kb(game.length).padStart(8)}
    styles.css     ${kb(styles.length).padStart(8)}
    body.html      ${kb(body.length).padStart(8)}
    ─────────────────────────
    total          ${kb(html.length).padStart(8)}
`);
