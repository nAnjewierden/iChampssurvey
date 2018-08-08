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
    dbInstance.get_current_questions().then(questions =>{
        res.status(200).send(questions)
        console.log(questions)
    })
    
}))

app.get('/getAllQuestions', ((req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getAllQuestions().then(questions =>{
        res.status(200).send(questions)
    })
    
}))

app.post('/addNewQuestion', (req, res) =>
{
    {
        const dbInstance = req.app.get('db')
        
        const { question, PosOrNeg } = req.body
        dbInstance.add_new_question([question, PosOrNeg])
            .then(() => res.status(200).send('that workedM'))
            .catch((err) => console.log(err))
        }})

app.put('/updateQuestion/:id', (req, res) => {
    {
        const dbInstance = req.app.get('db')
        
        const { question, PosOrNeg } = req.body
        dbInstance.change_current_question([req.params.id, question, PosOrNeg])
        .then(() => res.status(200).send('that workedM'))
        .catch((err) => console.log(err))
    }
})

app.delete('/deleteQuestion/:id', (req,res) => {
    
    const dbInstance = req.app.get('db')
    
    dbInstance.delete_current_question([req.params.id])
    .then(() => res.status(200).send('that workedM'))
    .catch((err) => console.log(err))
})



const port = process.env.PORT
app.listen(port, (() => { console.log('YAY') }))