import React, {Component} from 'react'
import axios from 'axios'

export default class CurrentQuestionComponent extends Component{
    constructor(){
        super()
        this.state = {
            editable: false,
            question: '',
            posOrNeg: ''
        }
    }

    handleQuestion(value){
        this.setState({
            question : value
        })
    }

    handlePosOrNeg(value){
        this.setState({
            posOrNeg : value
        })
    }

    makeChanges(id, question, posOrNeg){
        axios.put(`/updateQuestion/${id}`, {
            question,
            posOrNeg
        }).then((res) => {
            this.makeEditable()
            this.props.reMount()
            this.setState({
                question: '',
                posOrNeg: ''
            })
            return (res.data)
        })
    }

    makeEditable(value){
        this.setState({
            editable : !this.state.editable
        })
    }

    deleteQuestion(id){
        axios.delete(`/deleteQuestion/${id}`).then((res) => {
            this.props.reMount()
            return (res.data)
        })
    }

    render(){
        console.log(this.props)
        let returnable = this.state.editable ?
        <div>
            <input type='text' value={this.state.question} onChange={(ele) => this.handleQuestion(ele.target.value)}/>
            <input type='text' value={this.state.posOrNeg} onChange={(ele) => this.handlePosOrNeg(ele.target.value)}/>
            <button onClick={() => this.makeChanges(this.props.id, this.state.question, this.state.posOrNeg)}>Make Changes</button>
        </div>
        :
        <div>
            {this.props.question} 
            {this.props.posOrNeg ? 'positive' : 'negative'}
            <button onClick={() => this.makeEditable()}>Edit</button>
            <button onClick={() => this.deleteQuestion(this.props.id)}>Delete</button>
        </div>
        
        return(<div>
            {returnable}
            </div>
        )
        
    }
}