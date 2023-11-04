const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const fs = require("fs");

app.use(express.json());

let words = [];

fs.readFile("./data/words.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    try {
        words = JSON.parse(data);
        console.log("Data loaded!");
    } catch (err) {
        console.log("Error parsing JSON");
        words = [];
    }
});

//Static folder:
app.use(express.static(path.join(__dirname, "public")));

app.get("/hello", (req, res) => {
    const object = { msg: "Hello world" };
    res.json(object);
});

app.get("/echo/:id", (req, res) => {
    const object = { id: req.params.id };
    res.json(object);
});

app.post("/sum", (req, res) => {
    const numbers = req.body.numbers;
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    });
    res.json({ sum: sum });
});

app.post("/list", (req, res) => {
    words.push(req.body);

    fs.writeFile("./data/words.json", JSON.stringify(words), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Data saved!");
    });
    res.json(req.body);
});

app.listen(port, () => console.log("Server listening... [Port: 3000]"));
