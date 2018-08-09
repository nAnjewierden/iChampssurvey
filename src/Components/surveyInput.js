import React, {Component} from 'react'
import axios from 'axios'


export default function SurveyInput(props){
    return(
    <div>
        <div>School/Organization: <input type='text' onChange={(ele) => props.handleSchool(ele.target.value)}/></div>
        <div>Grade: <input type='text' onChange={(ele) => props.handleGrade(ele.target.value)}/></div>
        <div>Student Number: <input type='text' onChange={(ele) => props.handleStudentNumber(ele.target.value)}/></div>
    </div>
    )
}