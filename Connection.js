const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
const apiRoutes = require("./routes/api");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use("/api", apiRoutes);
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Define your routes here

// Start the server
const port = process.env.PORT || 3036;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
