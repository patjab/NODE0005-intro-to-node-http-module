const http = require("http")
const server = http.createServer((req, res) => {
  res.write("<h1>Welcome to my simple NODE.JS HTTP Module website</h1><br/>")
  if (req.url === "/") {
    res.write("Hello all!")
  } else if (req.url === "/mercury") {
    res.write("Hello closest planet to the sun!")
  } else if (req.url === "/pluto") {
    res.write("Hello former planet!")
  } else {
    res.write("Cannot find the requested resource")
  }
  res.end()
})

server.listen(3000)
console.log("Web server running on http://localhost:3000/")
