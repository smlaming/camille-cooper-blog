const express = require('express')
const db = require('./firebase');
const app = express()
app.use(express.json());
const port = 8000
const cors = require('cors')
app.use(cors({ origin: true }));
var router = express.Router();


const UserController = require("./routes/user.js")

const getAll = async (collection) => {
    const snapshot = await db.collection(collection).get();
    const all = []
    snapshot.forEach(doc => {
        const each = { ...doc.data(), id: doc.id };
        all.push(each);
    });
    return all;
}
const get = async (collection, id) => {
    const ref = db.collection(collection).doc(id);
    const doc = await ref.get();
    if (!doc.exists) {
        console.log('no such doc');
        return undefined;
    }
    return { ...doc.data() };
}

app.use('/user', UserController);


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/products', (req, res) => {
    getAll("products").then(resp => res.json(resp));
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})