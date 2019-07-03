

import React from 'react';

const TotalCorrect = (props) => {
    return(

        <div className="p-3 mb-2 bg-success text-white">Correct: {props.correct}</div>
      );
}

export default TotalCorrect;
