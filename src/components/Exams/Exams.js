import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import QuizRendering from '../../containers/QuizRendering';
import axios from 'axios';

const Exam = (Props) => {
    return(
      <ul class="list-group pb-4">
      <li class="list-group-item d-flex justify-content-between align-items-center ">
        {Props.name}
        <span class="badge  badge-pill" onClick = {Props.onClick}><Link  exact to="/quiz" className="btn btn-primary">Take the test</Link></span>
      </li>
     
     
    </ul>
        
        );
}

class Exams extends Component {

    
  state = {
      current : null ,
      dataSet:[],
      }
  get_exams= ()=> {
    const {location: {search}}  = this.props; 
    console.log(this.props);
      console.log(localStorage.getItem('token'));
      axios.get(`https://elshafeay.pythonanywhere.com/api/v2/exams/${search}`,
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
    <div className="container mt-5 pt-5 text-center">
       <h1> Sorry, You Should Login First :) </h1> 

     <h3 className="mt-5">
     <Link to="login" >Login Here</Link>
       </h3> 
      
      
    </div>
    
  );
 }
}

export default Exams;
