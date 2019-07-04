import React from 'react';

const Answer = (props) => {
    return (
      <li>
          <div className="answerOption">
            <button className="list-group-item list-group-item-primary" id="horizontal-list " onClick={() => props.handleClick(props.choice)}>
                {props.answer} </button>
         </div>
      </li>
        
    );
}

export default Answer;