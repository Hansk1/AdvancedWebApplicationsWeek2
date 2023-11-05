const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

app.use(express.json());

let words = [];

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
    console.log(req.body.text);
    words.push(req.body.text);
    res.json({ list: words });
});

app.listen(port, () => console.log("Server listening... [Port: 3000]"));
