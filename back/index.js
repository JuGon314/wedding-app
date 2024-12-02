const express = require('express');
const app = express();
const port = 3001;

app.listen(port, (error) =>  {
    if(error){
        console.log('Deu erro');
        return;
    }
    console.log('Servidor ativo');
})