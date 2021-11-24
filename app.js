import fetch from 'node-fetch';
import http from 'http';

let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fetch('https://icanhazdadjoke.com', {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    }).then(res => res.json())
    .then(json => console.log(json.joke));
});

app.listen(80, '0.0.0.0');
console.log('App started!');
