import { copyFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(projectRoot, 'android/app/build/outputs/apk/debug/app-debug.apk');
const outputDirectory = path.join(projectRoot, 'apk');
const destination = path.join(outputDirectory, 'TankRealms-debug.apk');

await mkdir(outputDirectory, { recursive: true });
await copyFile(source, destination);
const file = await stat(destination);
console.log(`APK ready: ${destination} (${(file.size / 1024 / 1024).toFixed(1)} MB)`);
