const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", apiRoutes);
app.use("/", htmlRoutes);

// css/html/js
app.use(express.static("public"));

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));