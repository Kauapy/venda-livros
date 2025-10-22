const fs = require("fs")

function getTodosLivros(req, res){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter( livro => livro.id === Number(id))
    return livroFiltrado
}

module.exports = {
    getTodosLivros,
    getLivroPorId
}