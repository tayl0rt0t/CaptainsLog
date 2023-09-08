const newView = require('./views/New')
const express = require('express');
const jsxEngine = require('jsx-view-engine');






const app = express();

const port = 3000;


app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine())


app.get('/', function(req, res) {
    res.send("Hello world!")
});

app.get('/new',function(req,res){
    res.render('/new',newView)
})

app.listen(port, function(){
    console.log(`I'm here @ port ${port}`)
})