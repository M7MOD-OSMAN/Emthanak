import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import emt7ankLogo from '../../svg/emt7ankLogo.svg'


class  Navigation extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top ">
            
              

        <div className="container">
          <Link className="navbar-brand" to="/"> <img src={emt7ankLogo} className="App-logo" alt="logo" /> Emt7ank</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

            <li className="nav-item">
                <NavLink className="nav-link text-white" exact to="/home" activeStyle={{ background: '#0AB8ED'}}>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about" activeStyle={{ background: '#0AB8ED'}}>About</NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink className="nav-link text-white " to="/contact" activeStyle={{ background: '#0AB8ED'}}>Contact</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link text-white rounded-lg" to="/quiz" activeStyle={{ background: '#0AB8ED'}}>Exams</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/register" activeStyle={{ background: '#0AB8ED'}}>Register</NavLink>
              </li>

              {
                     this.props.isAuthenticated ?

                     <li className="nav-item" onClick={this.props.logout}>
                         <NavLink className="nav-link text-white" exact to="/" activeStyle={{ background: '#0AB8ED'}}>Logout</NavLink>
                    </li>

                    :
                         <li className="nav-item">
                            <Link className="nav-link text-white" exact to="/login" activeStyle={{ background: '#0AB8ED'}}>Login</Link>
                         </li>

              }
           

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()) 
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Navigation));