'use strict';

const express = require('express');
const app = express();

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server runing...\n Listening on port ${PORT} \n`);
});