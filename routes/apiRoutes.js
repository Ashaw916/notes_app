const path = require("path");
const app = require("express").Router();

// sql connection
const connection = require("../db/connection");

app.get("/api/notes", (req, res) => {
  connection.query("SELECT * FROM notes", (err, response) => {
    return res.json(response);
  });
});

app.post("/notes", (req, res) => {
  // console.log(req.body);
  // return res.json(req.body);
  connection.query(
    "INSERT INTO notes SET ?",
    {
      title: req.body.title,
      text: req.body.text,
    },
    (err, response) => {
      return res.json(response);
    }
  );
});

// app.put("/api/notes", (req, res) => {
//   connection.query("SELECT * FROM notes", (err, response) => {
//     return res.json(response);
//   });
// });

app.delete("/api/notes", (req, res) => {

    const id = req.params.id
    console.log(id)
  connection.query("DELETE FROM notes WHERE ?", {id: id}, (err, response) => {
    return res.json(response);
  });
});

module.exports = app;
