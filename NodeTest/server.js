/**
 * Created with JetBrains PhpStorm.
 * User: dieterdelvaux
 * Date: 18/01/13
 * Time: 16:04
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8080, "localhost");
console.log('Server running at http://localhost:8080/');