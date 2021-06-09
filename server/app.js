const express = require("express");
const cors = require("cors");
const db = require("./firebase");
const app = express();
app.use(cors());
const port = 8000;

app.use(express.json());

const getAll = async (collection) => {
  const snapshot = await db.collection(collection).get();
  const all = [];
  snapshot.forEach((doc) => {
    const each = { ...doc.data(), id: doc.id };
    all.push(each);
  });
  return all;
};
const get = async (collection, id) => {
  const ref = db.collection(collection).doc(id);
  const doc = await ref.get();
  if (!doc.exists) {
    console.log("no such doc");
    return undefined;
  }
  return { ...doc.data() };
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  getAll("products").then((resp) => res.json(resp));
});

app.post("/cart/add*", (req, res) => {
  console.log("Attempted add");
  db.collection("cart").doc(req.body.name).set({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
  });
});

app.get("/cart/items", (req, res) => {
  console.log("Cart items requested");
  getAll("cart").then((resp) => res.json(resp));
});

app.delete("/cart/remove*", (req, res) => {
  console.log("Attemped delete", req.body.item);
  db.collection("cart").doc(req.body.item).delete();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
