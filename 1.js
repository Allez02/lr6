const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let a = [];


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function (req,res){
    res.send(a);
});


app.get('/:id', function (req,res){
    const id = req.params.id;
    const item = a[id];
    if (item===null|| id>=a.length) {
        res.sendStatus(404);
    } else res.send(a[id]);

});

app.post('/',(req,res)=>{
    const newid = a.push(req.body)-1;
    res.send(newid.toString());
});
app.put('/:id',(req,res) =>{
    const id = req.params.id;
    a[id] = req.body;
    res.send(id.toString());
});
app.delete('/:id', (req,res) =>{
    const id = req.params.id;
    a[id] = null;
    res.send(id.toString()  );
});
app.listen(8080);
