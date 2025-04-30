const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()    
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const html = '<html><body><h1> Hello World This is my first Node.Js Application Using Jenkins CI\CD  </h1></body></html>';
    res.end(html);
});
app.listen(port, () => console.log(`Hello World app started & listening on port ${port}!`))

module.exports = app;
