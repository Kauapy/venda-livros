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

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === Number(id))
    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deleteLivro(id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livrosAtuais.filter( livro => livro.id !== Number(id))
    fs.writeFileSync("livros.json", JSON.stringify(livroFiltrado))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    inserirLivro,
    modificaLivro,
    deleteLivro
}