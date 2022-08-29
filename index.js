const express = require("express");
const path = require("path");
const {trackRecord} = require("./informationcollector-client/src/Utils/Logger")

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '/informationcollector-client/build')));
app.get("/", () =>{

});

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