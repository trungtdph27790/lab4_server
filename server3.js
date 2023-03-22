const express = require('express')
const app = express()
const port = 3000

const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs.engine({
    extname: "hbs",
    // defaultLayout: 'page2',
    // layoutsDir: "views/layouts/",
}));

app.set('view engine', '.hbs');
app.set('views', './views');


app.get('/', (req, res) => {
    res.render('home.hbs', {
        layout: 'main',
        showContentTinhToan: false,
        showTitle: true
    })
});

app.get('/tinhtoan', (req, res) => {
    res.render('defaultView', {
        layout: 'main',
        soA: 15,
        soB: 7,
        phepTinh: 'cong',
        kq: 22,
        showContentTinhToan: true,
        showTitle: false
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

