import{EventEmitter} from "node:events";
const task =new EventEmitter();
const Hello = (name) => {
    console.log(`welcome to ${name}!`);
};
task.on("greet", Hello); // event and binding
task.emit("greet", "danish bhai"); //announcement 
console.log("hello world");