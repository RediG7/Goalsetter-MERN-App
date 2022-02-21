const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

// init express
const app = express();

// to use middleware -> app.use()
// body parser for raw json
app.use(express.json());
// body parser or url-encoded
app.use(express.urlencoded({ extended: false }));

// if it hits this /api/goals api it's going to look into ./routes/goalsRoutes file
app.use("/api/goals", require("./routes/goalRoutes"));

// override default express error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
