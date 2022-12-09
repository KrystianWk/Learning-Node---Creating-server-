const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Homepage');
  } else if (req.url === '/about') {
    res.end('our history');
  } else
    res.end(`
  <h1>Oops</h1>
  <p>We cant find this page</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
