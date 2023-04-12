let http = require('http')
let fs = require('fs')

let server = http.createServer()
server.on('request', (request, response) => {
    fs.readFile('index.html', (err, data) => {
            if (err) throw err 
        response.writeHead(200, { 
            'Content-type': 'text/html; charset=utf-8'
        })
    })
    //console.log(require('url').parse(request.url, true).query);
    let query = require('url').parse(request.url, true).query
    response.end(data)
})

server.listen(80)