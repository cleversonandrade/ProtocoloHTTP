let http = require('http')
http.createServer(function(req,res) {
    res.end('Oi')
}).listen(7071)

console.log('Servidor Rodando')