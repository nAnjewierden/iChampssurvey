import React, {Component} from 'react'
import axios from 'axios'

export default class CurrentQuestionComponent extends Component{
    constructor(){
        super()
        
    }
    render(){
        console.log(this.props)
        return(
            <div>{this.props.question} {this.props.posOrNeg ? 'positive' : 'negative'}</div>
        )
    }
}