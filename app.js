import express from "express";
import db from "./config/dbConnect.js"
import  livros from "./Livro.js"
import routes from "./index.js"


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () =>{
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app);



app.delete('/livros/:id', (req, res) =>{
    let {id} = re.param;
    let index = buscaLivro(id);
    livros.slice(index, 1);
    res.send('Livro' + id + 'removido com sucesso!')
})


function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app