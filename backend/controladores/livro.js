const { getTodosLivros, getLivroPorId, inserirLivro, modificaLivro } = require("../servicos/livro")


function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

function getLivrosId(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        if (!livro || livro.length === 0) {
            return res.status(404).json({ error: "Livro não encontrado" })
        }
        res.json(livro)
    } catch (error) {
        res.status(500).send({ message: "Erro no servidor" })
    }
}

function postLivros(req, res) {
    try {
        const livroNovo = req.body
        if (!livroNovo) {
            return res.status(400).json({ error: "Dados inválidos" })
        }
        inserirLivro(livroNovo)
        res.status(201).send(livroNovo)
    } catch (error) {
        res.status(500).send({ message: "Erro no servidor" })
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        modificaLivro(body, id)
        res.status(200).send({ message: "Livro atualizado com sucesso" })
    } catch (error) {
        res.status(500).send({ message: "Erro no servidor" })
    }
}

function deleteLivro(req, res){
    try {
        const id = req.params.id
        deleteLivro(id)
        res.status(200).send({ message: "Livro deletado com sucesso" })
    } catch (error) {
        
    }
}

module.exports = {
    getLivros,
    getLivrosId,
    postLivros,
    patchLivro,
    deleteLivro
}