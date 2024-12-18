// const Router = require('express').Router;
const { Router } = require("express");
const router = Router();

// GET-POST-PUT-DELETE

router.get("/produtos", (req, res) =>  {
    res.send("Listado!");
});

router.post("/produtos", (req, res) => {
    res.send("Postado!");
})

router.put("/produto/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Produto ${id} atualizado!`);
})

router.delete("/produto/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Produto ${id} deletado!`);
})

module.exports = router;