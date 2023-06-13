import { cp } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const copy = async () => {
    cp(__dirname.concat('\\files\\'),
        __dirname.concat('\\files_copy\\'),
        { recursive: true, errorOnExist: true, force: false },
        (err) => {
            if (err) throw new Error('FS operation failed')
        })
};

await copy();
