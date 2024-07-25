const express = require('express');
const app= express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.use (express.static(path.join(__dirname,'public')));

app.get('/', (req, res)=>{

    res.render('index')
});

app.get('/home', (req, res)=>{

    res.render('index')
});


app.get('/aboutme', (req, res)=>{

    res.render('aboutme')
});

app.get('/mariner', (req, res)=>{

    res.render('mariner')
});

app.get('/service-engineer', (req, res)=>{

    res.render('service-engineer')
});

app.get('/commissioning-engineer', (req, res)=>{

    res.render('commissioning-engineer')
});

app.get('/certifications', (req, res)=>{

    res.render('certifications')
});

app.get('/cat-certifications', (req, res)=>{

    res.render('cat-certifications')
});

app.get('/other-cert', (req, res)=>{

    res.render('other-cert')
});



app.listen(3000, ()=>{
     console.log('app on port 3000')
})