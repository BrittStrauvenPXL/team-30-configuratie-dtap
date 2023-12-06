require('dotenv').config(path:'.env.test');
const app = require("./app")
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`De applicatie draait op poort ${port}`);
});
