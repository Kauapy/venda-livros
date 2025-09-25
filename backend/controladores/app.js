function getLivros(req, res){
    try{
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
    res.send("Salve js")
}

module.exports = {
    getLivros
}