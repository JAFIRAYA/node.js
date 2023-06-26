const Number = require('./main.js');
const b = 5;
const sum = Number + b;
console.log("The sum is:", sum);

//part 2

let server=require('http')
server.createServer(function(res,req){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const result = `My Module is ${Number}`;
    const Response = `
    <html>
      <head>
        <title>Server Response</title>
      </head>
      <body>
        <h1>Hi there at the frontend</h1>
        <p>${result}</p>
      </body>
    </html>
  `;
  res.end(Response)
})
server.listen(3000,'localhost', () => {
    console.log("I'm listening");})

//Pârt 3

const exportDate = require('./main.js');

const currentDateTime = exportDate.DateTime();
console.log('Current Date and Time:', currentDateTime);



const http = require('http');
const mainModule = require('./main.js');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const currentDateTime = mainModule.getCurrentDateTime();
  const htmlResponse = `
    <html>
      <head>
        <title>Server Response</title>
      </head>
      <body>
        <p>Current Date and Time: ${currentDateTime}</p>
      </body>
    </html>
  `;

  res.end(htmlResponse);
});

server.listen(8080, 'localhost', () => {
  console.log("Server is running at http://localhost:8080/");
});

