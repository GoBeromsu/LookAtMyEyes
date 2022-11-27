const express = require("express");
const connection = require("./router/mysql-db"); // database
const WebSocket = require("ws");
const path = require("path");
const e = require("express");
const { response } = require("express");

const ws = new WebSocket.Server({ port: 8000 }, () => {
    console.log("Socket server start on port 8080");
});
const app = express();

app.use(express.static(path.join(__dirname + "/public")));
app.set("port", process.env.PORT || 3000);

// 메인 페이지
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/demo.html");
    // var queryString = "SELECT * FROM gaze";

    // connection.query(queryString, (err, rows, fields) => {
    //     res.json(rows);
    // });
});
app.post("/", function (req, res) {
    var responseData = {};

    var query = connection.query(
        "select * from gaze  ORDER BY stamp ASC",
        function (err, rows) {
            responseData.score = [];
            responseData.stamp = [];
            if (err) throw err;
            var bvalue = rows[0].intense;
            var currentValue = 0;

            rows.forEach(function (val) {
                if (bvalue > val.intense) {
                    if (currentValue != 0) {
                        currentValue -= 2;
                    }
                } else {
                    currentValue += 1;
                }
                bvalue = val.intense;
                responseData.score.push(currentValue);
                responseData.stamp.push(val.stamp);
            });

            res.json(responseData);
        }
    );
});

// 특정 유저의 데이터 가져오기
app.get("/:name", (req, res, next) => {
    var queryString = "SELECT * FROM gaze WHERE name = ? desc";
    var name = req.params.name;

    connection.query(queryString, [name], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        res.json(rows);
    });
});

ws.on("connection", (ws) => {
    ws.on("message", (data) => {
        //여기다가 유니티에서 오는 데이터 처리하면 됨 분기하던가
    });
});

app.listen(app.get("port"), () => {
    console.log(
        "Express server listening on port " +
            app.get("port") +
            " : http://localhost:3000"
    );
});
