const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;
require('./hbs/helpers');


app.use(express.static(__dirname + '/'));

hbs.registerPartials(__dirname + '/views/partials/');

app.set('view engine', 'hbs');

//pagina principal
app.get('/', (req, res) => {

    res.render('home', {
        //nombre: 'César'
    });
})

app.get('/about', (req, res) => {

    res.render('about');
});

app.get('/cars', (req, res) => {

    res.render('cars');
});


app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`);
});