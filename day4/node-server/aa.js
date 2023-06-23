
/*const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const html = `
    <html>
      <head>
        <title>Server Response</title>
      </head>
      <body>
        <p>This is line 1 of HTML.</p>
        <p>This is line 2 of HTML.</p>
        <p>This is line 3 of HTML.</p>
      </body>
    </html>
  `;

  res.end(html);
});

server.listen(3000, 'localhost', () => {
  console.log("Server is running at http://localhost:3000/");
});
------------exercie2---------------

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  const user = {
    firstname: 'John',
    lastname: 'Doe'
  };

  const jsonResponse = JSON.stringify(user);

  res.end(jsonResponse);
});

server.listen(8080, 'localhost', () => {
  console.log("Server is running at http://localhost:8080/");
});

------------exercie3---------------

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<p>This is an HTML line of code.</p>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
*/

