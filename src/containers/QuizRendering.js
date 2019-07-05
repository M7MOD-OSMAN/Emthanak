import React,{Component} from 'react';
import dataSet from '../components/Dataset';
import ScoreArea from '../components/QuizRendering/ScoreArea';
import QuizArea from '../components/QuizRendering/QuizArea';

class QuizRendering extends Component {
 
  
     constructor(props){
       super(props);
       this.state = {
        current:0, 
        dataSet: props.dataSet,
         correct:0,
          incorrect:0
        }
     }
  handleClick= (choice) => {
    var answerString = parseInt(this.state.dataSet[this.state.current].answer,10);

    if (choice === answerString) {
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({incorrect: this.state.incorrect + 1})
    }
    
    if (this.state.current === dataSet.length -1) {
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

        <div className="App-header  bg-light ">
          
          <h2 className="display-4 bg-info rounded text-center">Quiz Assignment:</h2>
        </div>
        {this.state.current === dataSet.length -1 ? this.renderScoreArea() : this.renderQuizArea()}
        
      </div>
    )
  }
}

export default QuizRendering;