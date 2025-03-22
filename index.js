import express from "express";

const app = express();
const port = 8003;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// app.listen(port, () => {
//   console.log(`\nServer is running on http://localhost:${port}`);
// });
