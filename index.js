const express = require("express");
const app = express();
const connectDB = require('./config/db');
const PORT = 5000;

// coneect your DB KRNA
connectDB();

app.use(express.json({ extended: false }));
app.use('/api/users', require('./routes/users'));
// app.use('/api/admins', require('./routes/admin'));

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
});



