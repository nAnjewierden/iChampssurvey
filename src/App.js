import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import AdminPage from './Components/adminPage';
import SurveyPage from './Components/surveyPage';
import routes from './Routes/routes'

class App extends Component {
  constructor(){
    super()
    this.state = {
      arrayOfQuestions : [],
      AUTHORIZED: false
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
       <nav className="nav-bar">
          <Link to='/' className="nav-item-1"><h4>SURVEY PAGE</h4></Link>
          <Link to='/adminPage' className="nav-item-2"><h4>ADMIN PAGE</h4></Link>
        </nav>
        <div className='routeDiv'>
        {routes}
        </div>  
      </div>
    );
  }
}

export default App;
