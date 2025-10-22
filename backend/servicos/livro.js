const fs = require("fs")

function getTodosLivros(req, res){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter( livro => livro.id === Number(id))
    return livroFiltrado
}

function inserirLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    inserirLivro
}