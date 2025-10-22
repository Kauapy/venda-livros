const { getTodosLivros, getLivroPorId, postLivros } = require("../servicos/livro")

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
        if(!livro) return res.status(404).json({error: "Livro não encontrado"})
        res.json(livro)
    } catch (error){
        res.status(500).send({message: "Erro no servidor"})
    }
}

function postLivros(req, res){
    try{
        const livroNovo = req.body
        inserirLivro(livroNovo)
        if(!livroNovo) return res.status(400).json({error: "Dados inválidos"})
        res.send(novoLivro)
    } catch (error){
        res.status(500).send({message: "Erro no servidor"})
    }
}

module.exports = {
    getLivros,
    getLivrosId,
    postLivros
}

