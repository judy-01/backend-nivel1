
const express = require('express');
const router = express.Router();


const app = express();
const port = 3333;

function showUser(req, res){
    res.json({
        name:"kalu",
        email:"23hlu.com",
        password :"1223"

    })

}


function showPort(){
    console.log(`Server online ${port}`);
}

app.use(router.get('/user', showUser)) //teste no navegador localhost:3333/hello

app.listen(port, showPort); 