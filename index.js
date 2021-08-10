const express = require("express");
const app = express();
const connectDB = require('./config/db');
const PORT = 5000;

// coneect your DB KRNA
connectDB();
app.use(express.json());

<<<<<<< HEAD
app.use(express.json({ extended: false }));
app.use('/api/users', require('./routes/users'));
// app.use('/api/admins', require('./routes/admin'));
=======
app.use(express.json({ extended: false }))


const user = require('./routes/users');

const admin = require('./routes/admin');

app.use('/api/users', user);
app.use('/api/admins', admin);

app.use((err, req, res, next) => {
    return res.status(err.status).json({ msg: err.errors });
});

>>>>>>> 879ccb96644a2e62fe0843f0ef397e7439cb30af

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
});



