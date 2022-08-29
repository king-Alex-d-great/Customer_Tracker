const express = require("express");
const path = require("path");
const {trackRecord} = require("./informationcollector-client/src/Utils/Logger")

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const buildPath = path.join(__dirname, "..", "build");
console.log(__dirname, "dirname")
app.use(express.static(buildPath));
//app.use(express.static(path.resolve(__dirname, '')));
// app.get("/", () =>{

// });

app.post("/app", async (req, res) => {  
 const {details} = req.body;
 await trackRecord(details);
 console.log("REACT!!")
  res.redirect("/");
});

app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname,
      "../../informationcollector-client/build",
      "./index.html"
    )
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});