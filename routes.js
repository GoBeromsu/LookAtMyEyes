const express = require("express");
const mysql = require("mysql");
const db = require("./routes/mysql-db"); // database

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.send("Root : Look at My eyes");
});

//sample code
app.get("/gaze", (req, res) => {
    db.query(
        "SELECT * from test",
        (error,
        (rows) => {
            if (error) throw error;
            res.send(rows);
        })
    );
});

app.listen(app.get("port"), () => {
    console.log("Express server listening on port " + app.get("port"));
    console.log("http://localhost:3000");
});
