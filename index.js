const express = require("express");
const app = express();
const connectDB=require('./config/db')


const PORT = 5000;

// coneect your DB KRNA
connectDB();



app.get("/api", (req, res) => {
    res.send("hello coders....");
});

app.get('/api/msg', (req, res) => {
    res.send("hello farziyo");
});

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
