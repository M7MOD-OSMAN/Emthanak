import React,{Component} from 'react';
import dataSet from '../Dataset';
import ScoreArea from './ScoreArea';
import QuizArea from './QuizArea';
import logo from '../../svg/logo.svg';

class QuizRendering extends Component {
 
  
     constructor(props){
       super(props);
       this.state = {
        current:0, 
        dataSet: props.dataSet,
         correct:0,
          incorrect:0,
        }
     }
  handleClick= (choice) => {
    var answerString = parseInt(this.state.dataSet[this.state.current].answer,10);

    if (choice === answerString) {
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({incorrect: this.state.incorrect + 1})
    }
    
    if (this.state.current === this.state.dataSet.length ) {
      this.setState({current:this.state.current})
      this.setState({incorrect: this.state.incorrect})
      this.setState({correct: this.state.correct})
    } else {
         this.setState({current: this.state.current + 1}) 
    }
  }
  
  renderQuizArea=()=>{
    return <QuizArea 
    handleClick={this.handleClick} 
    dataSet={this.state.dataSet[this.state.current]}
    questionTotal={this.state.dataSet.length}
    currentQuestion={this.state.current + 1}

    /> 
  }

  renderScoreArea=()=>{
    return <ScoreArea 
    correct={this.state.correct}
    incorrect={this.state.incorrect} 
  />
  }
 
  render() {
    return(
      <div  className="App bg-light">

        
          <h2 className="display-4 bg-dark text-white rounded text-center">
            <span><img src={logo} className="App-logo" alt="logo" /></span>
            Quiz Assignment
            <span><img src={logo} className="App-logo" alt="logo" /></span>
            </h2>
        {this.state.current === this.state.dataSet.length  ? this.renderScoreArea() : this.renderQuizArea()}
        
      </div>
    )
  }
}

export default QuizRendering;