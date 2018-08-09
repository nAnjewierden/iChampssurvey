import React, {Component} from 'react'
import axios from 'axios'
import SurveyInput from './surveyInput'
import SurveyQuestion from './surveyQuestion'

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
        this.handleSchoolNumber = this.handleStudentNumber.bind(this)
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
                
                <div>
                    <SurveyQuestion question={ele.question} posOrneg={ele.posOrneg}/>
                </div>
            )
        })
        return(
        <div>
            <SurveyInput handleSchoolName={this.handleSchoolName} handleGrade={this.handleGrade} handleStudentNumber={this.handleStudentNumber}/>
            {questions}
        </div>
        )
    }
}
