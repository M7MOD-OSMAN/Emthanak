import React,{Component} from 'react';
import dataSet from '../Dataset';
import ScoreArea from '../QuizRendering/ScoreArea';
import QuizArea from '../QuizRendering/QuizArea';



class QuizRendering extends Component {
  
 
    
    state = {
      current:0, 
      dataSet:dataSet,
       correct:0,
        incorrect:0
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
    questionTotal={dataSet.length}
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
      <div  className="App">

        <div className="App-header bg-info ">
          
          <h2>Quiz Assignment:</h2>
        </div>
        {this.state.current === dataSet.length -1 ? this.renderScoreArea() : this.renderQuizArea()}
        
        
      </div>
    )
  }
}

export default QuizRendering;