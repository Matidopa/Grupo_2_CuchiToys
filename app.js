const express = require ('express');
const app = express();
const path = require("path");
const port= 3030;

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/',(req,res)=>{
    res.sendFile (path.join(__dirname,'views/home.html'))
});
app.get('/registro',(req,res)=>{
    res.sendFile (path.join(__dirname,'views/registro.html'))
});
app.get('/DetalleDeProducto',(req,res)=>{
    res.sendFile (path.join(__dirname,'views/detalleDeProducto.html'))
});
app.get('/login',(req,res)=>{
    res.sendFile (path.join(__dirname,'views/login.html'))
});