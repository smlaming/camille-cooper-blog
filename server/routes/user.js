const express = require('express');
var app = express.Router();
const db = require('../firebase');
const admin = require('firebase-admin');

app.get("/login", async (req, res) => {
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
                    transactions: user.data().transactions,
                    shippingAddress: user.data().shippingAddress,
                    admin: user.data().isAdmin
                })
                .end();

        } else {
            res.send({ role: "none" }).end();
        }
    }
});
app.post("/signup", async (req, res) => {
    console.log(req.body)
    const uid = req.body.uid;
    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const userName = req.body.userName
    const transactions = []
    const isAdmin = false


    try {
        await db.collection("user").doc(uid).set({ email, firstName, lastName, userName, uid, transactions, isAdmin })
        res.sendStatus(200).end()
    } catch (error) {
        res.sendStatus(500).end()
    }
})
app.post('/addtransaction', (req, res) => {
    const userID = req.body.uid;

    const ref = db.collection('user').doc(userID);
    const unionRes = ref.update({
        transactions: admin.firestore.FieldValue.arrayUnion(req.body.transaction)
    });
    res.send('added a new transacation')
    console.log(unionRes)
})
app.delete('/delete', (req, res) => {
    console.log("deleting")
    const user = req.body.user;
    console.log(user)
    db.collection("user").doc(user).delete().then(resp => res.sendStatus(200).end());
})

module.exports = app;