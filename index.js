const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.listen(PORT, () => console.log('サーバーが起動しました。'));

app.get("/", (req, res) => {
    res.send("node.jsを学習中");
})

const customers = [
    {title: "hoge", id: 1},
    {title: "fuga", id: 2},
    {title: "taro", id: 3},
    {title: "poo", id: 4},
    {title: "mame", id: 5},
    {title: "mochi", id: 6}
];

app.get("/api/customers", (req, res) => {
    res.send(customers);
})

app.post("/api/customers", (req, res) => {
    const customer = {title: req.body.title, id: customers.length + 1};
    customers.push(customer);
    res.send(customer);
})