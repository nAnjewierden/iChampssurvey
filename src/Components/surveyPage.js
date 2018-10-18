import React, {Component} from 'react'
import axios from 'axios'
import SurveyInput from './surveyInput'
import SurveyQuestion from './surveyQuestion'
import './styleSheets/surveyPage.css'

export default class SurveyPage extends Component{
    constructor(){
        super()
            this.state = {
                schoolName: '',
                grade: '',
                studentNumber: 0,
                arrayOfQuestions: [],
            }
        this.handleSchoolName = this.handleSchoolName.bind(this)
        this.handleGrade = this.handleGrade.bind(this)
        this.handleStudentName = this.handleStudentName.bind(this)
    }

    componentDidMount(){
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
        <div className='full-page'>
            <SurveyInput handleSchoolName={this.handleSchoolName} handleGrade={this.handleGrade} handleStudentNumber={this.handleStudentNumber}/>
            {questions}
        </div>
        )
    }
}

