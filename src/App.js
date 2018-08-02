import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      arrayOfQuestions : []
    }
  }

  captureNewQuestion(value){
    this.setState({
      tempQuestion : value
    })
  }

  addQuestion(){
    this.setState({
      arrayOfQuestions : [...this.state.arrayOfQuestions, this.state.tempQuestion]
    })
  }

  changeQuestion(i){
    let newArray = this.state.arrayOfQuestions.splice(i, 1, this.state.tempQuestion)
    console.log(newArray, this.state.arrayOfQuestions)
    this.setState({
      arrayOfQuestions : this.state.arrayOfQuestions.splice(i, 1, this.state.tempQuestion)
    })
  }
  render() {
    let questionBox = this.state.arrayOfQuestions.map((ele, i) => {
      return(
    <div key={i}>
    <h3>Current Question: {ele}</h3>
      New Question : <input type='text' onChange={e => this.captureNewQuestion(e.target.value)}/>
        <button onClick={e => this.changeQuestion(i)}>Edit</button>
        <button>Delete</button>
    </div>)
    })
    
    return (
      <div>
       {questionBox}
       <input onChange={ele => this.captureNewQuestion(ele.target.value)} type='text'></input>
       <button onClick={ele => this.addQuestion()}>Add Question</button>
      </div>
    );
  }
}

export default App;
