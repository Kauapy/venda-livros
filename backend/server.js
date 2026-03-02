const express = require("express")
const cors = require("cors")
const app = express()
const rotaLivro = require("./rotas/livros")
const port = 5000

app.use(express.json())
app.use(cors({origin : '*'}))

app.use("/livros", rotaLivro)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})