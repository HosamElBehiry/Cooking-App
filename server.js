const express = require("express");
const connectDB = require("./Config/db");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
// const path = require("path");
connectDB();

//Use Middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.use("/Public", express.static("./Public"));
app.use(bodyparser.json());

app.use("/api/reciep", require("./Routes/Reciep"));

// app.use(express.static(path.join(__dirname, "/Admin/build")));

// app.get("*", (_req, res) => {
//   res.sendFile(path.join(__dirname, "/Admin/build", "index.html"));
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server Run on Port ${PORT}`);
});
