import Header from './Header';
import Content from './Content';
import React, { Component } from 'react';


class Home extends Component {    
  
  render() {
    return (
      <div className="main-content home">
       <div>
        <Header {...this.props}/>
        </div>
        <div>
        <Content {...this.props}/> 
        </div>
      </div>
    );
  }
}

export default Home;