//import http from 'http';
// const http = require('http');
// http.createServer((req, res) => {
// to attached a file to the response
//     res.setHeader('Content-Disposition', 'attachment; filename=listaNombres.csv');
//     res.writeHead(200, { 'Content-Type': 'application/csv' });
//     res.write('Nombre,Apellido,Edad\n');
//     res.write('Juan,Perez,25\n');
//     res.write('Maria,Jimenez,30\n');
//     res.write('Pedro,Alvarez,28\n');
//     res.end();
// }
// ).listen(9090, () => {
//     console.log('Server running on port 9090');
// })
require('dotenv/config')
const express = require('express');
const app = express();
app.use(express.static('public'))
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');

})
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
