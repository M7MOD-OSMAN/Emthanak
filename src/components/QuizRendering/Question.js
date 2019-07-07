import React from 'react';


const Question = (props) => {
    return (
         <div >
              <div className="text-white bg-dark rounded mb-3">
            Question <span> {props.currentQuestion} </span> of <span> {props.questionTotal } </span>
            </div>
        <h3 className="questions">{ props.dataSet.question}</h3>
         </div>
       
    );
}

export default Question;