import * as path from 'node:path'
import { release, version } from 'node:os'
import http from 'node:http';
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";
import { createRequire } from 'node:module';
createRequire(dirname(fileURLToPath(import.meta.url)).concat('./files/c.js'));

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = createRequire(dirname(fileURLToPath(import.meta.url)).concat('./files/a.json'));
} else {
    unknownObject = createRequire(dirname(fileURLToPath(import.meta.url)).concat('./files/b.json'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${dirname(fileURLToPath(import.meta.url))}`);

export const myServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
