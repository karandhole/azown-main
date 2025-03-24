const express = require("express");
const connectToMongo = require("./db/connect");
const cors = require("cors");
const path = require("path");

connectToMongo();
const app = express();
const port = 5000;

// Middleware
app.use(express.json({ limit: "500mb" }));
app.use(cors());

// Fixing __dirname properly
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));

// Available Routes
app.use("/user", require("./routes/user"));
app.use("/property", require("./routes/property"));
app.use("/admin", require("./routes/admin"));
app.use("/service", require("./routes/service"));
app.use("/leadprop", require("./routes/leadprop"));
app.use("/handler", require("./routes/handler"));
app.use("/likes", require("./routes/likeprop"));

// Serve frontend for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// Start the Server
app.listen(port, () => {
  console.log(` Server is running on http://localhost:${port}`);
});
