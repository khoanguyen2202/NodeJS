const handlebars = require("express-handlebars");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/news", function (req, res) {
  res.render("news");
});
app.get("/search", function (req, res) {
  console.log(req.query.q);
  res.render("search");
});
app.post("/news", function (req, res) {
  console.log(req.body.news);
  res.send("");
});

app.listen(
  port,
  console.log(`Example app listening at http://localhost:${port}`)
);
