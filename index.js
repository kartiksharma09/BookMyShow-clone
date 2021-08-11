const express = require("express");
const app = express();
const connectDB = require('./config/db');
const router = express.Router();


const PORT = 5000;

// // coneect your DB KRNA
connectDB();
app.use(express.json());

app.use(express.json({ extended: false }))


const user = require('./routes/users');

const admin = require('./routes/admin');

app.use('/api/users', user);
app.use('/api/admins', admin);

app.use((err, req, res, next) => {
    return res.status(err.status).json({ msg: err.errors });
});


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});