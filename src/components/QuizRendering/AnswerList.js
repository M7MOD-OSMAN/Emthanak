import React from 'react';
import Answer from './Answer';

const AnswerList = (props) => {
    var choices = []
    if(props.dataSet){
      for (let i = 0; i < props.dataSet.choices.length; i++) {
        choices.push(
              <Answer choice={i}
                  handleClick={props.handleClick} 
                  answer={props.dataSet.choices[i]}
                  />)
       }
    }
   
  return(
              
              <ol type="A"className="answerOptions">
                 {choices}
             </ol>
  );
}

export default AnswerList;