import axios from 'axios';

const livrosAPI = axios.create({
    baseURL: 'http://localhost:5000/livros'
})

async function getLivros(){
    const resposta = await livrosAPI.get('/');

    return resposta.data
}

export {
    getLivros
}