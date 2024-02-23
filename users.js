
const express = require('express');
const router = express.Router();


const app = express();
const port = 3333;

const users = [
    {
        name : "baby",
        email : "123bb@hotmail.com",
        password :"love32"
    },
    {
        name : "starOne",
        email : "123bb@gmail.com",
        password :"fuck42"
    },
    {
        name : "neo",
        email : "123bb@hotmail.com",
        password :"bob1234"
    }

]
function showUsers(req, res){
    res.json(users)

}

function showPort(){
    console.log(`Server online ${port}`);
}



app.use(router.get('/users', showUsers)) //teste no navegador localhost:3333/hello

app.listen(port, showPort); 