import axios from 'axios';

const livrosAPI = axios.create({
    baseURL: 'http://localhost:5000'
})

async function getLivros(){
    const resposta = await livrosAPI.get('/livros');

    return resposta.data
}

export {
    getLivros
}