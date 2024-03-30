const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const { sequelize } = require("./models/userModel");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credential: true }));
app.use(express.json());

const connect = async () => {
  try {
    await sequelize.sync();
    console.log("Connected to MySQL database");
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1); // Exit the process with a non-zero status code
  }
};

app.use("/api/auth", authRoute);

const port = 4000;

app.listen(port, () => {
  connect()
    .then(() => {
      console.log("Server listening on port", port);
    })
    .catch((err) => {
      console.error("Error starting server:", err);
      process.exit(1); // Exit the process with a non-zero status code
    });
});
