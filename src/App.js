import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';
import Navigation from './containers/Navigation';
import Footer from './containers/Footer';
import Contact from './containers/Contact';
import Register from './containers/Register';
import Home from './containers/Home';
import Login from './containers/Login';
import Exams from './components/Exams/Exams';
import CreateExam from './components/Exams/CreateExam';
import About from './containers/About';
import Hoc from './hoc/hoc';
import NotFound from './containers/NotFound';
import axios from 'axios';


class  App extends Component {

  state={
    id:0,
    dataa:[],
    username:'',
    is_teacher:false,
    finished_exams:[],
    take_later_exams:[],
    latest_result:0

}

getUserInfo = () => {
      
  axios.get("http://elshafeay.pythonanywhere.com/api/v2/users/me/",
  {headers:     
    {
      'Content-Type': 'application/json',
      'Authorization':'Token '+localStorage.getItem("token")
    }
  }
)
.then(res => {
 this.setState({
  username:res.data.username,
  id:res.data.id,
  is_teacher:res.data.profile.is_teacher,
  finished_exams:res.data.finished_exams,
  take_later_exams:res.data.take_later_exams,
  latest_result:res.data.latest_result
 });
})
.catch(err => {
  console.log('auth failed' + err)

});
};

componentDidUpdate(){
      this.getUserInfo();

}

  componentDidMount() {
    this.props.onTryAutoSignup();  
    this.getUserInfo();

  }  

  render () {
    


  return (
   <BrowserRouter>
    <div className="App">
      <Hoc>
        <Navigation 
        is_teacher={this.state.is_teacher}
        username={this.state.username}
        {...this.props}
        />
        <Switch>
        
        <Route exact path="/" component= {Home}/>
        <Route exact path="/home" component= {Home}/>
        <Route path="/about" component= {About}/>
        <Route path="/contact" component= {Contact}/>
        <Route path="/register" component= {Register}/>
        <Route path="/login" component= {Login}/>
        <Route path="/exams" component= {Exams}/>
        <Route path='/create-exam' component= {CreateExam} /> 
        <Route component={NotFound} />

        </Switch>

        <Footer {...this.props}/>
      </Hoc>
      
    </div>
    </BrowserRouter>  
  );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
