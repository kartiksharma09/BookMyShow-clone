const express = require("express");
const app = express();
const connectDB = require('./config/db');
<<<<<<< HEAD
const router = express.Router();


=======
>>>>>>> 8a7116222e736e2c93c30868f11f16adda1e3250
const PORT = 5000;

// coneect your DB KRNA
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


app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
});



