let http = require("http");
let fs = require("fs");
let url = require("url");
let sliders = require("./slider");

function read(callback) {
    fs.readFile("./book.json", "utf8", function(err, data) {
        data = data.length === 0 ? [] : JSON.parse(data);
        callback(data);
    });
}

function write(data, callback) {
    fs.writeFile("./book.json", JSON.stringify(data), callback);
}
http.createServer(function(req, res) {
        let { pathname, query } = url.parse(req.url, true);
        let _id = query.id;
        if (pathname === "/api/slider") {
            return res.end(JSON.stringify(sliders));
        }
        if (pathname === "/api/hot") {
            read(function(data) {
                var books = data.reverse().slice(0, 6);
                res.end(JSON.stringify(books));
            });
        }
        if (pathname === "/api/book") {
            switch (req.method) {
                case "GET":
                    read(function(data) {
                        res.end(JSON.stringify(data));
                    })
                    break;
                case "POST":
                    let str = '';
                    req.on('data', function(data) {
                        str += data;
                    });
                    req.on('end', function() {
                        var book = JSON.parse(str);
                        read(function(books) {
                            book.id = books.length > 0 ? books.length : 1;
                            books.push(book);
                            write(books, function() {
                                res.end(JSON.stringify(book));
                            })
                        });
                    })
                    break;
                case "DELETE":
                    read(function(books) {
                        console.log(books.id);
                        console.log(_id);
                        books = books.filter(item => item.id != _id);
                        write(books, function() {
                            res.end(JSON.stringify({}));
                        })

                    });
                    break;
                case "PUT":
                    break;
            }
        }
    })
    .listen(2800);