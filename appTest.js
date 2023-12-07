require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`De applicatie draait op poort ${port}`);
});
