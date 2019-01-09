import React, {Component} from 'react'
import axios from 'axios'
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import './styleSheets/surveyQuestion.css'

export default class SurveyQuestion extends Component{
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
<div className='question-box'>
    <h3>{this.props.question}</h3>
<input className='slider' type="range" list="tickmarks" onChange={(ele) => this.handleAnswer(ele.target.value)}/>

<datalist id="tickmarks">
  <option value="1" label="1"/>
  <option value="2" label="2"/>
  <option value="3" label="3"/>
  <option value="4" label="4"/>
  <option value="5" label="5"/>
</datalist>
</div>
:
<div className='question-box'>
<h3>{this.props.question}</h3>
<input   className='slider' type="range" list="tickmarks" onChange={(ele) => this.handleAnswer(ele.target.value)}/>

<datalist id="tickmarks">
  <option value="5" label="5"/>
  <option value="4" label="4"/>
  <option value="3" label="3"/>
  <option value="2" label="2"/>
  <option value="1" label="1"/>
</datalist>
</div>
        return (
        <div className='question-box'>
           <ButtonToolbar>
        <ButtonGroup>
          <Button color='Primary'>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </ButtonGroup>
            </ButtonToolbar>
        </div>
        )
    }
}


