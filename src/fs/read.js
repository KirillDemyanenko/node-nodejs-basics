import { readFile } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
const read = async () => {
    readFile(resolve(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt'), (err, data) => {
        if (err) throw new Error('FS operation failed')
        console.log(data.toString())
    })
};

await read();
