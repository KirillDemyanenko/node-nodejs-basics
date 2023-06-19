import { writeFile } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
const create = async () => {
    writeFile(dirname(fileURLToPath(import.meta.url)).concat('/files/fresh.txt'),
        'I am fresh and young',
        {flag: 'wx'},
        (err) => {
            if (err) throw new Error('FS operation failed')
        });
};

await create();
