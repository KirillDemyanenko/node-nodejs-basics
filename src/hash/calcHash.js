import { createHash } from 'node:crypto'
import { readFile } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
const calculateHash = async () => {
    const hash = createHash('sha256')
    let dataForHash = ''
    readFile(resolve(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCalculateHashFor.txt'),
        (err, data) => {
            if (err) throw new Error('FS operation failed')
            dataForHash.concat(data.toString())
        })
    hash.update(dataForHash)
    console.log(hash.digest('hex'))
};

await calculateHash();
