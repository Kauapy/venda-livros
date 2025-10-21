const { getTodosLivros, getLivroPorId } = require("../servicos/livro")

function getLivros(req, res){
    try{
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivrosId(req, res){
    try{
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    } catch (error){
        res.status(500).send({message: "Erro no servidor"})
    }
}

function postLivros(req, res){
    try{
        const novoLivro = req.body
        res.send(novoLivro)
    } catch (error){
        res.status(500).send({message: "Erro no servidor"})
    }
}

module.exports = {
    getLivros,
    postLivros,
    getLivrosId
}

