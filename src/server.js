const http = require('node:http');
const users = require('./mocks/users');

console.log(users[0])

http.createServer(function(request, response) {

    // console.log(request.url);

    // response.end(`Hello Client! You did a request in: ${request.url}`);

    // if (request.url === '/users') {
    //     response.end('Users!');
    // } else {
    //     response.end('Hello!');
    // }

    // if (request.url === '/users') {
    //     setTimeout(() => {
    //         response.end('After of 30s.');
    //     }, 3000);
    //     return;
    // }

    response.end('<a href="#">Hello!</a>')

}).listen(3000);

