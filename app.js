const express = require ('express');
const app = express();
const port= 3030;
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});
const path= require ('path');

app.use(express.static(path.resolve('public')))

app.get('/',(req,res)=>{
    res.sendFile (path.join(__dirname,'views/index.html'))
});
