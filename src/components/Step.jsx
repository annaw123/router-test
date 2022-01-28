import React from "react";
import './Step.css'

function Step(props) {
    return(
        <div className={`step ${props.done}`}>
        <div>
          <div className="circle"></div>
        </div>
        <div>
            <div className="title">{props.name}</div>
        </div>
      </div>
    )
}

export default Step;