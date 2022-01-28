import React from "react";
import Progress from './Progress';
import CoursePage from "../routes/course_page";
import './Tutorial.css'

function Tutorial(){
    return(
        <div className="Tutorial-box">
            <Progress />
            <CoursePage />
        </div>
    );
}

export default Tutorial;