const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// static folder setup
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const connectDB = require('./config/db');
connectDB();

app.set('views', path.join(__dirname, '/views'));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/api/files/', require('./routes/files'));
app.use('/files/', require('./routes/show'));
app.use('/files/download/', require('./routes/download'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
