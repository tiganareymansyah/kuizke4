import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/tampil" && req.method === "GET") {
    res.end ("Tigana Reymansyah");
  }
});

server.listen(3000);

console.log("server berjalan di http://localhost:3000");