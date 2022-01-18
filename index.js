const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));
app.use('/js', express.static('js'));
app.use('/css', express.static('css'));

app.set('views','./pages/views');
// set ejs
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

const PORT = process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log('running on PORT:3000');
});



