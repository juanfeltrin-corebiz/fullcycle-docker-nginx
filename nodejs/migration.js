const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "nodedb",
    user: "root",
    password: "12345678",
    database: "node"
});

connection.query("DROP TABLE IF EXISTS peoples");
connection.query("CREATE TABLE peoples (id int not null primary key auto_increment, name VARCHAR(255))");
connection.end();