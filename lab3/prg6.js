import http from 'http'

const server = http.createServer((req, res) => {
    if(req.url === "/"&&req.method === "GET") {
        res.statusCode = 200;
        res.end("get request")
    } else if(req.url === "/"&&req.method === "POST") {
        res.statusCode = 200;
        res.end("post request")
    }
    else if(req.url === "/"&&req.method === "PUT") {
        res.statusCode = 200;
        res.end("put request")
    }
    else if(req.url === "/"&&req.method === "DELETE") {
        res.statusCode = 200;
        res.end("delete request")
    }
})

server.listen(3000, () => {
    console.log("pprg6 is runninggggggggg.............")
})