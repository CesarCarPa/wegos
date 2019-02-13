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

app.get('/contact', (req, res) => {

    res.render('contact');
});

app.get('/cars', (req, res) => {

    res.render('cars');
});

app.get('/faq', (req, res) => {

    res.render('faq');
});

app.get('/login', (req, res) => {

    res.render('login');
});

app.get('/car-detail', (req, res) => {

    res.render('car-detail');
});


app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`);
});