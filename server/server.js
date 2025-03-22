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

// Correct `__dirname` Usage
const buildPath = path.join(__dirname, "../client/build");

// Ensure Build Folder Exists
const fs = require("fs");
if (!fs.existsSync(buildPath)) {
  console.error(" React build folder not found:", buildPath);
} else {
  app.use(express.static(buildPath));

  //  Serve React App
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

//  Available Routes
app.use("/user", require("./routes/user"));
app.use("/property", require("./routes/property"));
app.use("/admin", require("./routes/admin"));
app.use("/service", require("./routes/service"));
app.use("/leadprop", require("./routes/leadprop"));
app.use("/handler", require("./routes/handler"));
app.use("/likes", require("./routes/likeprop"));

//  Start the Server
app.listen(port, () => {
  console.log(` Server is running on http://localhost:${port}`);
});
