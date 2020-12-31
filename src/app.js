const exprees = require("express");
const app = exprees();

app.get("/", (req, resp) => {
  resp.send("AQUI STOY");
});

app.listen(3000, () => {
  console.log("start at http://localhost:3000");
});
