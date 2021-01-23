const express=require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let obj = [];

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=> {
	res.send(JSON.stringify(obj));
});
app.get('/:id', (req,res)=>{
	const id=req.params.id;
	if (id>=arr.length) {
        res.sendStatus(404);
    } 
	else 
		res.send(JSON.stringify(obj[id]));
});
app.post('/',(req,res)=>{
    const newid = obj.push(req.body)-1;
    res.send(newid.toString());
});
app.put('/:id', (req,res) =>{
	const id = req.params.id;
    odj[id] = req.body;
	res.send(id.toString());
});
app.delete('/:id', (req,res) =>{
    const id = req.params.id;
    obj[id] = null;
    res.send(id.toString()  );
});
app.listen(8080);