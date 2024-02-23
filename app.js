
const express = require('express');
const router = express.Router();


const app = express();
const port = 3333;

function showHello(req, res){
    res.send('Funcionando !')

}


function showPort(){
    console.log(`Server online ${port}`);
}

app.use(router.get('/hello', showHello)) //teste no navegador localhost:3333/hello

app.listen(port, showPort); 