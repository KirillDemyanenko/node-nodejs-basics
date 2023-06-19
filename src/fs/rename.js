import * as fs from 'node:fs'
import { dirname, join} from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const rename = async () => {
    fs.rename(join(__dirname, 'files', 'wrongFilename.txt'), join(__dirname, 'files', 'properFilename.md'), (err) => {
        if (err) throw new Error('FS operation failed')
    })
};

await rename();
