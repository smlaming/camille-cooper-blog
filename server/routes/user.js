const express = require('express');
var app = express.Router();
const db = require('../firebase');

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
                    transactions: user.data().purchases
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


    try {
        await db.collection("user").doc(uid).set({ email, firstName, lastName, userName, uid, transactions })
        res.sendStatus(200).end()
    } catch (error) {
        res.sendStatus(500).end()
    }
})
module.exports = app;