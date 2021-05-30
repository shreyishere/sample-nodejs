const express = require("express");
const app = express();

app.get("/", () => {
  res.send("Hello WOrld");
});

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log("Sample NodeJS app running at http://%s:%s", address, port);
});
