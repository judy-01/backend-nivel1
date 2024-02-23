const express = require('express') 

const router = express.Router()

const app = express()



const PORT = 3333



function showTime(request, response) {

 const data = new Date()

 const hora = data.toLocaleTimeString('pt-BR')

 response.send(hora)

}

function showPort() {

    console.log(`localhost:${PORT}/time`)

}



app.use(router.get('/time', showTime))

app.listen(PORT, showPort)