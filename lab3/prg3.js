import http from "http";
const server=http.createServer((req,res)=>{
    res.end("<h3>bye bye</h3>");
});
server.listen(5000,()=>console.log("prg3 is runninggggggggg............."));
server.on("request", (req, res) => {
    if(req.url==="/"){
        res.setHeader("Content-Type","text/html");
        res.end("<h1>hello</h1>");
    }
});