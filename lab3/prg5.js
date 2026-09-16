import http from "http";

const server=http.createServer((req,res)=>{
      console.log("method",req.method);
      console.log("url",req.url);

      if(req.url==="/"){
        res.setHeader("Content-Type","text/html");
        res.end("<h1>hello</h1>");
      }
      else if (req.url==="/about"){
        const product = {
           { id: 1,name; "laptop"};
           { id: 2,name; "mobile"};
        };
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(product));
      }
      else{
        res.end();
      }
});
server.listen(5000,()=>console.log("prg5 is runninggggggggg............."));