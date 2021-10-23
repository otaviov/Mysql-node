const express = require ('express')
const app = express();

app.get("/", async (req, res) => {
    res.send("Página inicial");
})

app.listen(8080, ()=> {
    console.log("Servidor na porta 8080");
})