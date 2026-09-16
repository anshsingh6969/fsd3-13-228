import http from "http";

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Client</h1>");
  res.write("<h2>ansh singh</h2>");
  res.write("<p>lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>");
  res.end("<h3>bye bye</h3>");
});

server.listen(4444, () => console.log("Server is running at 4444..."));