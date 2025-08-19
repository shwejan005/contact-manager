const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contact-routes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); 
})