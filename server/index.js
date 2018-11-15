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

app.get('/getCurrentQuestions_5', ((req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.get_current_questions_5().then(questions =>{
        res.status(200).send(questions)
        console.log(questions)
    })
    
}))

app.get('/getCurrentQuestions_10', ((req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.get_current_questions_10().then(questions =>{
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

app.get('/getCurrentQuestions_15', ((req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.get_current_questions_15().then(questions =>{
        res.status(200).send(questions)
        console.log(questions)
    })
    
}))

app.get('/getCurrentQuestions_20', ((req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.get_current_questions_20().then(questions =>{
        res.status(200).send(questions)
        console.log(questions)
    })
    
}))



app.put('/updateQuestion_5/:id', (req, res) => {
    {
        const dbInstance = req.app.get('db')
        
        const { question, PosOrNeg } = req.body
        dbInstance.change_current_question_5([req.params.id, question, PosOrNeg])
        .then(() => res.status(200).send('that workedM'))
        .catch((err) => console.log(err))
    }
})

app.put('/updateQuestion_10/:id', (req, res) => {
    {
        const dbInstance = req.app.get('db')
        
        const { question, PosOrNeg } = req.body
        dbInstance.change_current_question_10([req.params.id, question, PosOrNeg])
        .then(() => res.status(200).send('that workedM'))
        .catch((err) => console.log(err))
    }
})

app.put('/updateQuestion_15/:id', (req, res) => {
    {
        const dbInstance = req.app.get('db')
        
        const { question, PosOrNeg } = req.body
        dbInstance.change_current_question_15([req.params.id, question, PosOrNeg])
        .then(() => res.status(200).send('that workedM'))
        .catch((err) => console.log(err))
    }
})

app.put('/updateQuestion_20/:id', (req, res) => {
    {
        const dbInstance = req.app.get('db')
        
        const { question, PosOrNeg } = req.body
        dbInstance.change_current_question_20([req.params.id, question, PosOrNeg])
        .then(() => res.status(200).send('that workedM'))
        .catch((err) => console.log(err))
    }
})

app.post('/addNewSurveyResponse_5', (req, res) => {
    {
        const dbInstance = req.app.get('db')
        
        const { schoolName, grade, schoolID, question, answer, PosOrNeg } = req.body
        dbInstance.add_new_survey_reponse_5([schoolName, grade, schoolID, question, answer, PosOrNeg])
        .then(() => res.status(200).send('that workedM'))
        .catch((err) => console.log(err))
    }
})

app.post('/addNewSurveyResponse_10', (req, res) => {
    {
        const dbInstance = req.app.get('db')
        
        const { schoolName, grade, schoolID, question, answer, PosOrNeg } = req.body
        dbInstance.add_new_survey_reponse_10([schoolName, grade, schoolID, question, answer, PosOrNeg])
        .then(() => res.status(200).send('that workedM'))
        .catch((err) => console.log(err))
    }
})

app.post('/addNewSurveyResponse_15', (req, res) => {
    {
        const dbInstance = req.app.get('db')
        
        const { schoolName, grade, schoolID, question, answer, PosOrNeg } = req.body
        dbInstance.add_new_survey_reponse_15([schoolName, grade, schoolID, question, answer, PosOrNeg])
        .then(() => res.status(200).send('that workedM'))
        .catch((err) => console.log(err))
    }
})

app.post('/addNewSurveyResponse_20', (req, res) => {
    {
        const dbInstance = req.app.get('db')
        
        const { schoolName, grade, schoolID, question, answer, PosOrNeg } = req.body
        dbInstance.add_new_survey_reponse_20([schoolName, grade, schoolID, question, answer, PosOrNeg])
        .then(() => res.status(200).send('that workedM'))
        .catch((err) => console.log(err))
    }
})


const port = process.env.PORT
app.listen(port, (() => { console.log('YAY') }))