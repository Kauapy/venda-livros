const { Router } = require ("express")
const { getLivros, postLivros, getLivrosId } = require("../controladores/livro")
const router = Router()

router.get("/", getLivros)

router.get("/:id", getLivrosId)

router.post('/', postLivros)


router.patch('/', (req, res) => {
    
})
router.delete('/', (req, res) => {
    
})

module.exports = router;