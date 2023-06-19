import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
import * as fs from 'node:fs'
const read = async () => {
    const readStream = fs.createReadStream(resolve(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt'))
    readStream.on('open', () => {
        readStream.pipe(process.stdout)
    })
};

await read();
