const express = require("express");
const app = express();
const connectDB = require('./config/db');
const PORT = 5000;
const cors = require("cors")

// coneect your DB KRNA
connectDB();

app.use(cors())


app.use(express.json());



app.use(express.json({ extended: false }));

const user = require('./routes/users');

const admin = require('./routes/admin');

const auth = require("./routes/auth")

app.use('/api/users', user);
app.use('/api/admins', admin);
app.use("/api/auth", auth)

app.use((err, req, res, next) => {
    // console.log(err);
    return res.status(err.status).json({ msg: err.errors });
});


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});