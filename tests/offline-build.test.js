const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const webRoot = path.join(root, 'www');
const builtIndex = path.join(webRoot, 'index.html');

function collectFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(filePath) : [filePath];
  });
}

test('production web build is self-contained for offline APK use', () => {
  assert.equal(fs.existsSync(builtIndex), true, 'npm test must create www/index.html');

  const html = fs.readFileSync(builtIndex, 'utf8');
  const assetReferences = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1]);

  assert.ok(assetReferences.length >= 2, 'built page should reference local JavaScript and CSS');
  for (const reference of assetReferences) {
    assert.doesNotMatch(reference, /^(?:https?:)?\/\//, `external asset found: ${reference}`);
    const localPath = path.resolve(webRoot, reference.replace(/^\.\//, ''));
    assert.equal(fs.existsSync(localPath), true, `missing built asset: ${reference}`);
  }

  const builtFiles = collectFiles(webRoot);
  assert.ok(builtFiles.some((file) => file.endsWith('.js')));
  assert.ok(builtFiles.some((file) => file.endsWith('.css')));

  const allBuiltText = builtFiles
    .filter((file) => /\.(?:html|js|css)$/.test(file))
    .map((file) => fs.readFileSync(file, 'utf8'))
    .join('\n');
  assert.doesNotMatch(allBuiltText, /cdnjs\.cloudflare\.com/);
});

test('Capacitor identity and offline web directory are fixed', () => {
  const config = JSON.parse(fs.readFileSync(path.join(root, 'capacitor.config.json'), 'utf8'));
  assert.equal(config.appId, 'com.thiltete.tankrealms');
  assert.equal(config.appName, 'Tank Realms');
  assert.equal(config.webDir, 'www');
  assert.equal(config.android.allowMixedContent, false);
  const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  assert.equal(packageJson.dependencies['@capacitor/haptics'], '8.0.2');
});

test('Android wrapper is portrait, Android 9+, fullscreen, and network-independent', () => {
  const manifest = fs.readFileSync(
    path.join(root, 'android/app/src/main/AndroidManifest.xml'),
    'utf8'
  );
  const variables = fs.readFileSync(path.join(root, 'android/variables.gradle'), 'utf8');
  const activity = fs.readFileSync(
    path.join(root, 'android/app/src/main/java/com/thiltete/tankrealms/MainActivity.java'),
    'utf8'
  );
  const appGradle = fs.readFileSync(path.join(root, 'android/app/build.gradle'), 'utf8');

  assert.match(manifest, /android:screenOrientation="portrait"/);
  assert.match(manifest, /android:hardwareAccelerated="true"/);
  assert.match(manifest, /android:glEsVersion="0x00020000"/);
  assert.doesNotMatch(manifest, /android\.permission\.INTERNET/);
  assert.match(variables, /minSdkVersion\s*=\s*28/);
  assert.match(appGradle, /applicationId "com\.thiltete\.tankrealms"/);
  assert.match(activity, /SYSTEM_UI_FLAG_IMMERSIVE_STICKY/);
  assert.match(activity, /FLAG_KEEP_SCREEN_ON/);
});
