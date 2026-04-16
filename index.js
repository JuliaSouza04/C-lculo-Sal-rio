const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', 'views')
app.set('view engine', 'ejs')
app.listen(3004, () => console.log('Servidor online'))


app.get('/', (req, res)=>{
    res.json({
        msg:'ok'
    })
})

app.get('/home', (req, res)=>{
    res.render('index')
})