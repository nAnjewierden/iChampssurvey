import React, {Component} from 'react'
import axios from 'axios'

export default class AddNewQuestion extends Component{
    constructor(){
        super()
        this.state ={
            newQuestion : '',
            newPosOrNeg : true
        }
    }
    handleNewQuestion(value){
        this.setState({
           newQuestion: value 
        })
    }
    handleNewPosOrNeg(value){
        this.setState({
           newPosOrNeg: value 
        })
    }
    addQuestion(question, PosOrNeg){
        axios.post('/addNewQuestion', {question, PosOrNeg})
        .then((res) => this.props.reMount(res.data))
    }
    render(){
        return(
            <div>
                <div>New Question: <input onChange={(ele) => this.handleNewQuestion(ele.target.value)} type='text'></input></div>
                <div>Postitive or Negative?<input onChange={(ele) => this.handleNewPosOrNeg(true)} type='text'></input></div>
                <div><button onClick={() => this.addQuestion(this.state.newQuestion, this.state.newPosOrNeg)}>Add</button></div>
            </div>
        )
    }
}