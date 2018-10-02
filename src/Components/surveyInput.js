import React, {Component} from 'react'
import axios from 'axios'
import './styleSheets/surveyInput.css'


export default function SurveyInput(props){
    return(
    <div className='info-input-box'>
        <div className='info_input'>School/Organization: <input type='text' onChange={(ele) => props.handleSchoolName(ele.target.value)}/></div>
        <div className='info_input'>Grade: <input type='text' onChange={(ele) => props.handleGrade(ele.target.value)}/></div>
        <div className='info_input'>Student Number: <input type='text' onChange={(ele) => props.handleStudentNumber(ele.target.value)}/></div>
    </div>
    )
}