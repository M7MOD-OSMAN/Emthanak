import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';
import Navigation from './containers/Navigation';
import Footer from './containers/Footer';
import Contact from './containers/Contact';
import Register from './containers/Register';
import Home from './containers/Home';
import Login from './containers/Login';
import Exams from './components/Exams/Exams'
import About from './containers/About';
import Hoc from './hoc/hoc';

class  App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();  
  }  

  render () {
  return (
   <BrowserRouter>
    <div className="App">
      <Hoc>
        <Navigation {...this.props}/>

        <Route exact path="/" component= {Home}/>
        <Route exact path="/home" component= {Home}/>
        <Route path="/about" component= {About}/>
        <Route path="/contact" component= {Contact}/>
        <Route path="/register" component= {Register}/>
        <Route path="/login" component= {Login}/>
        <Route  path="/exams" component= {Exams} /> 

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
