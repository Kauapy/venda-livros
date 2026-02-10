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
        const id = req.params.id;

        if (!id) {
            return res.status(422).json({ error: "ID é obrigatório" });
        }

        if (isNaN(Number(id))) {
            return res.status(422).json({ error: "ID deve ser um número" });
        }

        const livro = getLivroPorId(Number(id));

        if (!livro || livro.length === 0) {
            return res.status(404).json({ error: "Livro não encontrado" });
        }

        return res.json(livro);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro no servidor" });
    }
}

function postLivros(req, res) {
    try {
        const livroNovo = req.body
        
        if(req.params.nome){
            inserirLivro(livroNovo)
            res.status(201).send('Livro inserido com sucesso')
        } else{
            return res.status(422).json({ error: "Nome do livro é obrigatório" })
        }
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

        if (!id || isNaN(Number(id))) {
            return res.status(422).json({ error: "ID deve ser um número" });
        } 

        modificaLivro(body, id)
        res.status(200).send({ message: "Livro atualizado com sucesso" })
    } catch (error) {
        res.status(500).send({ message: "Erro no servidor" })
    }
}

function deleteLivro(req, res){
    try {
        const id = req.params.id

        if (!id || isNaN(Number(id))) {
            return res.status(422).json({ error: "ID deve ser um número" });
        } 
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