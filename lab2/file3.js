import { appendFile, readFile, writeFile, unlink } from "fs/promises";

const writeData = async (fname, contents) => {
    await writeFile(fname, contents);
    console.log("File written");
};

const readData = async (fname) => {
    const data = await readFile(fname, "utf-8");
    console.log("File contents");
    console.log(data);
};
const appenddata = async(fname, contents) => {
    await appendFile(fname, "\n" +contents);
};
const deletefile=async(fname)=>{
    await fs.unlink(fname);
    console.log('$(fname) deleted');
}

// await writeData("happy.txt", "I am very happy");
// await readData("happy.txt");
// await appenddata("happy.txt","fsd is interesting");
// await readData("happy.txt");
await deletefile("happy.txt");