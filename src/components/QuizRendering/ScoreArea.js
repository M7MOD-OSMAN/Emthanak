import React,{Component} from 'react';
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';

class ScoreArea  extends Component  {
  render (){
    return(
      <div className="text-center">
          <ul className="list-inline pt-2">
            <li className="list-inline-item"><TotalCorrect correct={this.props.correct} />
            </li>
            <li className="list-inline-item"><TotalIncorrect incorrect={this.props.incorrect} /></li>
          </ul>
      </div>
  
  )
}
    
}

export default ScoreArea;
