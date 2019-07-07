import React from 'react';

const Answer = (props) => {
    return (
      <li>
            <button className="list-group-item list-group-item-dark" id="horizontal-list " onClick={() => props.handleClick(props.choice)}>
                {props.answer} </button>
      </li>
        
    );
}

export default Answer;