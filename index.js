
const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Bienvenidos")
})

app.get('/user', (req, res) => {
    res.json({
        'username': 'Sebastian',
        'lastname': 'Gonzalez',
    });
});
app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send("Sending user");
})

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`Usuario ${req.params.id} actualizado`)
})

app.delete('/user/:id', (req, res) => {
    res.send(`Usuario ${req.params.id} eliminado`)
})

app.listen(3001, () => {
    console.log("Escuchando puerto 3001");
});