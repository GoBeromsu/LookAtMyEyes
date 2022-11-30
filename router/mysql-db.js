const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "berom",
    password: "1234",
    database: "eyes", // 연결할 데이터베이스
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
});

// connection.query(
//     "INSERT INTO gaze(name,code,intense) VALUES ('berom', '1','0')",
//     (err, rows) => {
//         if (err) {
//             console.log(err);
//             //
//         }
//     }
// );

module.exports = connection;
