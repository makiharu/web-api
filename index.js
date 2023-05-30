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

// 一覧取得
app.get("/api/customers", (req, res) => {
    res.send(customers);
})

// 登録
app.post("/api/customers", (req, res) => {
    const customer = {title: req.body.title, id: customers.length + 1};
    customers.push(customer);
    res.send(customer);
})

// 更新
app.put("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    customer.title = req.body.title;
    res.send(customer);
})

// 検索
app.get("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    res.send(customer);
})

// 削除
app.delete("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
})