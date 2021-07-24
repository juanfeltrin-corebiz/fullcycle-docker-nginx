const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "nodedb",
    user: "root",
    password: "12345678",
    database: "node"
});

const dropTable = "DROP TABLE IF EXISTS peoples";

connection.query(dropTable);

const sql = "CREATE TABLE peoples (id int not null primary key auto_increment, name VARCHAR(255))";

connection.query(sql);
connection.end();