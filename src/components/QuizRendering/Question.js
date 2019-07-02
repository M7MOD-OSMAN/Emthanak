import React from 'react';

const Question = (props) => {
    return (
         <div >
              <div className="questionCount">
            Question <span> {props.currentQuestion} </span> of <span> {props.questionTotal -1} </span>
            </div>

        <h1 className='question'>{props.dataSet? props.dataSet.question:"no question"}</h1>

         </div>
       
    );
}

export default Question;