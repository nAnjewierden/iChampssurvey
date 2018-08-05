const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config();
const app = express()

// app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())
// app.use(express.static('/../public/build'))

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
    dbInstance.seedFile()
        .then(res => console.log('that sucSEEDed...'))
        .catch(err => console.log('aww shit..', err))

    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.get('/getCurrentQuestions', ((req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getAllQuestions().then(questions =>{
        res.status(200).send(questions)
    })
    
}))

app.get('/getAllQuestions', ((req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getAllQuestions().then(questions =>{
        res.status(200).send(questions)
    })
    
}))


const port = process.env.PORT
app.listen(port, (() => { console.log('YAY') }))