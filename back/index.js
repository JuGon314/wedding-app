const express = require("express");
const app = express();
const port = 3001;
const router = require("./Routers/index.js");

router(app);

app.listen(port, (error) =>  {
    if(error){
        console.log("Deu erro");
        return;
    }
    console.log("Servidor ativo");
})