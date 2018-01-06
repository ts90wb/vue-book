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
                        if (_id) {
                            let book = data.find(item => item.id == _id);
                            res.end(JSON.stringify(book));
                        } else {
                            res.end(JSON.stringify(data));
                        }
                    })
                    break;
                case "POST":
                    let str1 = '';
                    req.on('data', function(data) {
                        str1 += data;
                    });
                    req.on('end', function() {
                        let book1 = JSON.parse(str1);
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

                        books = books.filter(item => item.id != _id);
                        write(books, function() {
                            res.end(JSON.stringify({}));
                        })

                    });
                    break;
                case "PUT":
                    let str2 = '';
                    req.on('data', function(data) {
                        str2 += data;
                    });
                    req.on('end', function() {
                        let book2 = JSON.parse(str2);
                        read(function(books) {
                            books = books.map(item => {
                                    if (item.id == _id) {
                                        return book2;
                                    }
                                    return item;
                                }

                            )
                            write(books, function() {
                                JSON.stringify(book2);
                            });
                        });


                    })
                    break;
            }
        }
    })
    .listen(2800);