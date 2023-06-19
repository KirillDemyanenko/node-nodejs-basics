import { readdir } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
const list = async () => {
    readdir(resolve(dirname(fileURLToPath(import.meta.url)), 'files'), (err, files) => {
        if (err) throw new Error('FS operation failed')
        console.log(...files)
    })
};

await list();
