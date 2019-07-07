import React,{Component} from 'react';
import dataSet from '../Dataset';
import axios from 'axios';
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
  send_result(result){
    const {examPk} = this.props;
    axios.post("http://elshafeay.pythonanywhere.com/api/v2/users/me/finished-exams/",
    
      {
        "exam_pk":examPk,
        "result": result
      }
    ,
      {
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + localStorage.getItem("token")
        }
      }
    )
      .then(res => {
      
      })
      .catch(err => {
        console.log('auth failed' + err)

      });
  }
  renderScoreArea=()=>{
    const correct = this.state.correct;
    const incorrect = this.state.incorrect;
    this.send_result((correct/(incorrect+correct))*100)
    return <ScoreArea 
    correct={correct}
    incorrect={incorrect} 
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