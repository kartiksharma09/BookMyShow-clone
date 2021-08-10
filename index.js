const express = require("express");
const app = express();
<<<<<<< HEAD
const connectDB=require('./config/db');
=======
const connectDB = require('./config/db');
>>>>>>> af818d1cbc37930abb54f578c1792127a0e6c311


const PORT = 5000;

// // coneect your DB KRNA
connectDB();


app.use('/api/users', require('./routes/users'));
app.use('/api/admins', require('./routes/admin'));

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});