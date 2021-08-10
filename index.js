const express = require("express");
const app = express();

const PORT = 5000;

app.get("/api", (req, res) => {
    res.send("hello coders");
});

app.get('/api/msg', (req, res) => {
    res.send("hello farziyo");
});

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});