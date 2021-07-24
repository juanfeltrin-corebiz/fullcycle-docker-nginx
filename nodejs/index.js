const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: "nodedb",
    user: "root",
    password: "12345678",
    database: "node"
});

const sql = `insert into peoples (name) values ('Juan')`;

connection.query(sql);

let peoples = [];

connection.query('SELECT name FROM peoples', function (error, results) {
    peoples = results; 
});

connection.end();

app.get('/', (req, res) => {
    res.send(
        '<h1>Full Cycle ROCKS!!</h1><br>' +
        '<ul>' +
        peoples.forEach(people => {
          `<li>${people.name}</li>`
        }) +
        '</ul>'
    );
});

app.listen(port, () => {
    console.log(`Application running on the port ${port}`)
});