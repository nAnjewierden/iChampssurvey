import React, {Component} from 'react'
import axios from 'axios'
import CurrentQuestionComponent from './currentQuestionComponent'

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
    }
    render(){
        let listOfQuestions = this.state.arrayOfQuestions.map((ele) =>{
            return(
                <div key={ele.id}><CurrentQuestionComponent question={ele.question} posOrNeg={ele.pos_or_neg}/></div>
            )
        })
       return(
         <div>
            {listOfQuestions}
        </div>
       )
    }
}