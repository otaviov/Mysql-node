const express = require ('express')
const app = express();

const db = require('./models/db')

app.get("/", async (req, res) => {
    res.send("Página inicial - Otaviov");
})

app.get("/cadastrar", async (req, res) => {
    res.send("Página cadastrar - Otaviov");
})

app.listen(8080, () => {
    console.log("Servidor na porta 8080");
})