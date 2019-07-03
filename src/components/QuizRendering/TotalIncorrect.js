

import React from 'react';

const TotalIncorrect = (props) => {
    return(
        <div className="p-3 mb-2 bg-danger text-white" >Incorrect: {props.incorrect}</div>
      );
}

export default TotalIncorrect;