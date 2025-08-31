// server.js
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Define the port
const PORT = 3000;

// Start listening
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
