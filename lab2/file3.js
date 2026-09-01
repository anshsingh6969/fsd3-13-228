import {writeFile, readFile} from 'fs/promises';
const writeData = async (fname,contents) => {
    await writeFile(fname, contents);
    console.log("file written");
}
const readData = (fname) => {
    const data = await readFile(fname, 'utf-8');
    console.log("file CONTENTS");
    console.log(data);
};
await writeData('happy.txt', 'I am very Happy');
await readData('happy.txt'); 