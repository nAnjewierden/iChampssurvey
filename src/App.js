import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdminPage from './Components/adminPage';

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
    
    
    return (
      <div>
       <AdminPage/>
      </div>
    );
  }
}

export default App;
