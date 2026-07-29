import {writeFile} from 'fs/promises';

await writeFile('stud.txt', 'name: ansh singh');
console.log("file written");