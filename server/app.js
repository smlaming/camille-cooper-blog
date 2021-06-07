const express = require('express')
const db = require('./firebase');
const app = express()
const port = 8000


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

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/products', (req, res) => {
    getAll("products").then(resp => res.json(resp));
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})