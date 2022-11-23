
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "berom",
    password: "1234",
    database: "test", // 연결할 데이터베이스
});

connection.connect((err) => {
    if (err) throw err;
    console.log("MySQL Database is Connected");
});

module.exports = connection;