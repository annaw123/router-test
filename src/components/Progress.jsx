import React from "react";
import Step from "./Step";
import './Progress.css'

function Progress() {
    return (
        <div className="progress">
            <Step done=" step-active" name="Introduction"/>
            <Step done="" name="Printing"/>
            <Step done="" name="Handling errors"/>
            <Step done="" name="Maths in the console"/>
            <Step done="" name="Variables and inputs"/>
            <Step done="" name="Comments"/>
            <Step done="" name="String manipulation"/>
        </div>
    )
}

export default Progress;