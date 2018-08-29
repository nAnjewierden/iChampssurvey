import React, {Component} from 'react'
import axios from 'axios'
import CurrentQuestionComponent from './currentQuestionComponent'
import AddNewQuestion from './addNewQuestion'
import './styleSheets/adminPage.css'

export default class AdminPage extends Component{
    constructor(){
        super()
        this.state = {
            arrayOfQuestions: []
        }
    }
    componentDidMount(){
        axios.get('/getCurrentQuestions').then((res) =>{
            this.setState({
                arrayOfQuestions: res.data
            })
            console.log(this.state)
        })
        this.reMount = this.reMount.bind(this)
    }
    reMount(){
        axios.get('/getCurrentQuestions').then((res) =>{
            this.setState({
                arrayOfQuestions: res.data
            })
            console.log(this.state)
        })
    }
    render(){
        let listOfQuestions = this.state.arrayOfQuestions.map((ele) =>{
            return(
                <div key={ele.id}><CurrentQuestionComponent id={ele.id} question={ele.question} posOrNeg={ele.pos_or_neg} reMount={this.reMount}/></div>
            )
        })
       return(
         <div className='full-page'>
            {listOfQuestions}
            <AddNewQuestion reMount={this.reMount}/>
        </div>
       )
    }
}