const express = require("express");
import path from "path";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../../informationcollector-client/build')));

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname,
      "../../informationcollector-client/build",
      "index.html"
    )
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
