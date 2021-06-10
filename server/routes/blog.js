const express = require('express');
var app = express.Router();
const db = require('../firebase');

app.get("/get", async (req, res) => {
    const snapshot = await db.collection("blog").get();
    const blog = [];
  
    snapshot.forEach((doc) => {
      blog.push({ ...doc.data(), id: doc.id });
    });
    res.send(blog);
  });

  app.get("/get/post", async (req, res) => {
    const id = req.query.id;
    const snapshot = await db.collection("blog").get();
    // res.send(snapshot.data());
    snapshot.forEach((doc) => {
        if (doc.id === id){
            res.send(doc.data())
        }
      });
  });

  app.get("/get/comments", async (req, res) => {
    const id = req.query.id;
    const comments = [];
    const snapshot = await db.collection("blog").doc(id).collection("comments").get();
    snapshot.forEach((doc) => {
        comments.push({ ...doc.data(), id: doc.id });
      });
      res.send(comments);
  });
 
  app.post("/addpost", async (req, res) => {
    const { title, photo, description, date, fulltext, quote } = req.body;
    const resp = await db.collection("blog").add({
        title,
        description,
        quote,
        photo,
        date,
        fulltext
      });
    console.log("added blog post with id: ", resp.id);
  });

  app.post("/addcomment", async (req, res) => {
    const { name, photo, comment, date, id } = req.body;
    const resp = await db.collection("blog").doc(id).collection("comments").add({
        name,
        photo,
        comment,
        date
    });
    console.log("added comment with id: ", resp.id);
  });


module.exports = app;