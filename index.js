const express = require("express");
const path = require("path");
const {
  trackRecord,
} = require("./informationcollector-client/src/Utils/Logger");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const buildPath = path.join(__dirname, "./informationcollector-client/build");
app.use(express.static(buildPath));

app.post("/app", async (req, res) => {
  const { details } = req.body;
  await trackRecord(details);
  console.log("Interacting with frontend");
  res.redirect("/");
});

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname,
      "./informationcollector-client/build",
      "./index.html"
    )
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
