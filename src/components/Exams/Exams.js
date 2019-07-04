import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import QuizRendering from '../../containers/QuizRendering';
import axios from 'axios';

const Exam = (Props) => {
    return(
        <div className="card text-center row mb-2 w-10 h-10" onClick = {Props.onClick}>
            <div className="col-lg-12 mb-4">
                <div className="card h-100">
                <h4 className="card-header">{Props.name}</h4>
                <div className="card-body">
                    <p className="card-text">{Props.desc}</p>
                </div>
                <div className="card-footer">
                    <Link  exact to="/quiz" className="btn btn-primary">Take the test</Link>
                </div>
                </div>
            </div>
        </div>);
}

class Exams extends Component {

    
    state = {
        current : null ,
        dataSet:[],
        }
    get_exams= ()=> { 
        console.log(localStorage.getItem('token'));
        axios.get('https://elshafeay.pythonanywhere.com/api/v2/exams/',
          {headers:     
            {
              'Content-Type': 'application/json',
              'Authorization':'Token '+localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          console.log(res);
          this.setState({dataSet: res.data});
        })
      .catch(err => {
          console.log('auth failed' + err)
    
        });
      
      }
      componentDidMount(Props){
       this.get_exams();
      }

   onExamClick(exam)  {
            this.setState({current: exam});
   }   

   render (){
    if(this.state.dataSet[0]){
     const exams_cards=    this.state.dataSet.map(item =>
            <Exam name = {item.subject} desc= {"heelleele"} onClick={()=> this.onExamClick(item)}/>)
        return (
        <BrowserRouter>
        <div className="container  pt-5 mt-5">

        <Route path="/exams" render = {()=>exams_cards}/>
        <Route  exact path="/quiz" render = {()=><QuizRendering dataSet = {this.state.current.mcqs}/>} /> 

        </div>
        </BrowserRouter>
               
        );
    }

    return (
      <div></div>
    );
   }
}

export default Exams;
