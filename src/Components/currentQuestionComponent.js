import React, {Component} from 'react'
import axios from 'axios'

export default class CurrentQuestionComponent extends Component{
    constructor(){
        super()
        this.state = {
            editable: false,
            question: this.props.question,
            posOrNeg: this.props.posOrNeg
        }
    }

    handleQuestion(value){
        this.setState({
            question : value
        })
    }

    handlePosOrNeg(){
        this.setState({
            posOrNeg : value
        })
    }

    makeChanges(){
        
    }

    makeEditable(){
        this.setState({
            editable : !this.state.editable
        })
    }

    render(){
        let returnable = this.state.editable ?
        <div>
            <input type='text' value={this.state.question} onChange={(ele) => handleQuestion(ele.target.value)}/>
            <input type='text' value={this.state.posOrNeg} onChange={(ele) => handlePosOrNeg(ele.target.value)}/>
            <button onClick={() => this.makeChanges()}>Make Changes</button>
        </div>
        :
        <div>
            {this.props.question} 
            {this.props.posOrNeg ? 'positive' : 'negative'}
            <button onClick={() => this.makeEditable()}>Edit</button>
        </div>
        
        return(
            {returnable}
        )
        
    }
}