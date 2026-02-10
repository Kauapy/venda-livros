const { Router } = require ("express")
const { getLivros, postLivros, getLivrosId, patchLivro, deleteLivro } = require("../controladores/livro")
const router = Router()

router.get("/", getLivros)

router.get("/:id", getLivrosId)

router.post('/', postLivros)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router;