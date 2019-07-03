import React from 'react';

const Answer = (props) => {
    return (
      <ul>   
        <li className="answerOption">
            <button className="list-group-item list-group-item-primary" id="horizontal-list " onClick={() => props.handleClick(props.choice)}>
                {props.answer} </button>
         </li>
      </ul>             
    );
}

export default Answer;