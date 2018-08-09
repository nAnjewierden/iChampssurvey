import React, {Component} from 'react'
import axios from 'axios'

export default class SurveyQuestion extends Componen{
    constructor(){
        super()
        this.state = {
            answer: 0
        }
    }

    handleAnswer(value){
        this.setState({
            answer : value
        })
    }

    render(){
    let returnable = this.props.posOrNeg ?
<div>
    <h3>{this.props.question}</h3>
<input type="range" list="tickmarks" onChange={(ele) => this.handleAnswer(ele.target.value)}/>

<datalist id="tickmarks">
  <option value="1" label="1"/>
  <option value="2" label="2"/>
  <option value="3" label="3"/>
  <option value="4" label="4"/>
  <option value="5" label="5"/>
</datalist>
</div>
:
<div>
<h3>{this.props.question}</h3>
<input type="range" list="tickmarks" onChange={(ele) => this.handleAnswer(ele.target.value)}/>

<datalist id="tickmarks">
  <option value="5" label="5"/>
  <option value="4" label="4"/>
  <option value="3" label="3"/>
  <option value="2" label="2"/>
  <option value="1" label="1"/>
</datalist>
</div>
        return (
           {returnable}
        )
    }
}

