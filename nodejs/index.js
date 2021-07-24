const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const connection = mysql.createConnection({
        host: "nodedb",
        user: "root",
        password: "12345678",
        database: "node"
    });
    
    connection.query(`insert into peoples (name) values ('Juan')`);    

    connection.connect(function(err) {
        connection.query('SELECT name FROM peoples', function (error, results) {
            let peoples = '';

            results.forEach(people => {
                peoples += `<li>${people.name}</li>`
            })

            res.send(
                '<h1>Full Cycle ROCKS!!!</h1><br>' +
                '<ul>' + peoples + '</ul>'
            );
        });
    });
});

app.listen(port, () => {
    console.log(`Application running on the port ${port}`)
});