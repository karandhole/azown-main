const express = require("express");
const connectToMongo = require("./db/connect");
const cors = require("cors");


connectToMongo();
const app = express();
const port = 5000;

// Middleware
app.use(express.json({ limit: "500mb" }));
// app.use(cors());

app.use(cors({
  origin: ["https://azown.com", "http://localhost:3000"],
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));



// Available Routes
app.use("/user", require("./routes/user"));
app.use("/property", require("./routes/property"));
app.use("/admin", require("./routes/admin"));
app.use("/service", require("./routes/service"));
app.use("/leadprop", require("./routes/leadprop"));
app.use("/handler", require("./routes/handler"));
app.use("/likes", require("./routes/likeprop"));


// Start the Server
app.listen(port, () => {
  console.log(` Server is running on http://localhost:${port}`);
});
