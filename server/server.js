const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = 3000;
const lessons =  [
    {"topic": "math", "location": "Hendon", "price" : 100},
    {"topic": "math", "location": "Colindale", "price" : 80},
    {"topic": "math", "location": "Brent Cross", "price" : 90},
    {"topic": "math", "location": "Golders Green", "price" : 120},
];
const user = {"email": "user@email.com", "password": "mypassword"};

app.get("/", (req, res) => {
    res.send("express server main route");
});

app.get("/lessons", (req, res) => {
    res.json(lessons);
});

app.get("/user", (req, res) => {
    res.json(user);
})

app.listen(port, () => {
    console.log("server is running on port: " + port);
});