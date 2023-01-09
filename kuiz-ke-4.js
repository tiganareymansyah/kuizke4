import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/tampil") {
    // const ha = document.createElement("h1");
    // ha.textContent = "Tigana Reymansyah";
    res.end ("Tigana Reymansyah");
  }
});

server.listen(3000);

console.log("server berjalan di http://localhost:3000");