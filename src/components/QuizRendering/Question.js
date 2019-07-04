import React from 'react';

const Question = (props) => {
    return (
         <div >
              <div className="text-primary bg-dark rounded-pill mb-3">
            Question <span> {props.currentQuestion} </span> of <span> {props.questionTotal -1} </span>
            </div>
        <h1 className="questions">{props.dataSet? props.dataSet.question:"no question"}</h1>
         </div>
       
    );
}

export default Question;