const express = require('express');
const hbs = require('hbs');
const app = express();


app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials/')

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    // res.send('Hola mundo desde Server')

    res.render('home', {
        nombre: 'César',
        anio: new Date().getFullYear()
    });
})

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
})


app.listen(3000, () => {
    console.log('Escuchando desde el puerto 3000');
});