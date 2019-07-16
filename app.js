const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const TypeCoersionAPI = require('./routes/type-coersion');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/type-coersion', TypeCoersionAPI);

app.use((err, req, res, next) => {
    res.send(JSON.stringify(err));
});

const RUNNING_PORT = process.env.PORT || 3000;
app.listen(RUNNING_PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`[PORT:${RUNNING_PORT}] Server is running...`);
    }
});
