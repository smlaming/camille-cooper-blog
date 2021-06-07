const express = require('express')
const db = require('./firebase');
const app = express()
app.use(express.json());
const port = 8000
const cors = require('cors')
app.use(cors({ origin: true }));

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
app.get("/user", async (req, res) => {
    const uid = req.query.uid;
    const user = await db.collection("user").doc(uid).get();
    if (!user.exists) {
        res.send({ role: "none" }).end();
    } else {
        if (user.exists) {
            res
                .json({

                    uid: user.data.uid,
                    firstName: user.data().firstName,
                    lastName: user.data().lastName,
                    userName: user.data().userName,
                })
                .end();

        } else {
            res.send({ role: "none" }).end();
        }
    }
});
app.post("/users", async (req, res) => {
    console.log(req.body)
    const uid = req.body.uid;
    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const userName = req.body.userName



    try {
        await db.collection("user").doc(uid).set({ email, firstName, lastName, userName, uid })
        res.sendStatus(200).end()
    } catch (error) {
        res.sendStatus(500).end()
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})