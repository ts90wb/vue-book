let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./slider');

function read(callback) {
    fs.readFile('./book.json', 'utf8', function(err, data) {
        data = data.length === 0 ? [] : JSON.parse(data);
        callback(data);
    })
}
http.createServer(function(req, res) {
    let { pathname, query } = url.parse(req.url, true);
    if (pathname === '/api/slider') {
        return res.end(JSON.stringify(sliders));

    }
    if (pathname === '/api/hot') {
        read(function(data) {
            var books = data.reverse().slice(0, 6);
            res.end(JSON.stringify(books));

        })

    }


}).listen(2800);