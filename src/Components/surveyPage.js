import React, {Component} from 'react'
import axios from 'axios'
import SurveyInput from './surveyInput'
import SurveyQuestion from './surveyQuestion'
import {Container} from 'reactstrap' 
import './styleSheets/surveyPage.css'

export default class SurveyPage extends Component{
    constructor(){
        super()
            this.state = {
                schoolName: '',
                grade: '',
                studentNumber: 0,
                arrayOfQuestions: [],
                amountOfQuestions: 5
            }
        this.handleSchoolName = this.handleSchoolName.bind(this)
        this.handleGrade = this.handleGrade.bind(this)
        this.handleStudentName = this.handleStudentName.bind(this)
    }

    componentDidMount(){
        switch(this.state.amountOfQuestions){
            case 5:
                axios.get('/getCurrentQuestions_5').then((res) =>{
                    this.setState({
                        arrayOfQuestions: res.data
                    })
                    console.log(this.state)
                })
            break;
            case 10:
                axios.get('/getCurrentQuestions_10').then((res) =>{
                    this.setState({
                        arrayOfQuestions: res.data
                    })
                    console.log(this.state)
                })
            break;
            case 15:
                axios.get('/getCurrentQuestions_15').then((res) =>{
                    this.setState({
                        arrayOfQuestions: res.data
                    })
                    console.log(this.state)
                })
            break;
            case 20:
                axios.get('/getCurrentQuestions_20').then((res) =>{
                    this.setState({
                        arrayOfQuestions: res.data
                    })
                    console.log(this.state)
                })
            break;
        }
        axios.get('/getCurrentQuestions').then((res) =>{
            this.setState({
                arrayOfQuestions: res.data
            })
            console.log(this.state)
        })
    }

    handleSchoolName(value){
        this.setState({
            schoolName: value
        })
    }

    handleGrade(value){
        this.setState({
            grade: value
        })
    }

    handleStudentName(value){
        this.setState({
            studentNumber: value
        })
    }

    render(){
        let questions = this.state.arrayOfQuestions.map((ele) => {
            return(
                
                
                    <SurveyQuestion question={ele.question} posOrneg={ele.posOrneg}/>
                
            )
        })
        return(
        <Container>
            <SurveyInput handleSchoolName={this.handleSchoolName} handleGrade={this.handleGrade} handleStudentNumber={this.handleStudentNumber}/>
            {questions}
        </Container>
        )
    }
}

