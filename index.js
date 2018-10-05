    const http = require('http');

    var fs = require('fs');

    var express = require('express');
    var app = express();
    
    


app.use((req, res, next) => {
    console.log('Time:', Date.now(), req.url);
    next(); // sans cette ligne on ne pourra pas poursuivre.
})

    
    app.get('/', (request, response) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
        fs.createReadStream(__dirname + "/html/index.html", "utf8").pipe(response);   
    });
    
    app.get('/contact', (request, response) => {
            response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                
                fs.createReadStream(__dirname + "/html/contact.html", "utf8").pipe(response)    ;
    })
;
    //manque 404

    app.listen(3000);
    console.log("c'est parti");
