import React,{Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import SurveyPage from '../Components/surveyPage';
import AdminPage from '../Components/adminPage';

export default(
<Switch>
    <Route exact path='/' component={SurveyPage}/>
    <Route path='/adminPage' component={AdminPage}/>
</Switch>
)