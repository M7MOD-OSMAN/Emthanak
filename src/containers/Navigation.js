import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import emt7ankLogo from '../svg/emt7ankLogo.svg'
import { Dropdown,Item ,Menu} from 'react-bootstrap';


class  Navigation extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top ">
            
              

        <div className="container">
          <Link className="navbar-brand" to="/"> <img src={emt7ankLogo}  alt="logo"/> Emt7ank</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

            <li className="nav-item">
                <NavLink className="nav-link text-white" exact to="/home" activeStyle={{ background: '#0AB8ED'}}>Home</NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about" activeStyle={{ background: '#0AB8ED'}}>About</NavLink>
              </li> */}
            
              <li className="nav-item">
                <NavLink className="nav-link text-white " to="/contact" activeStyle={{ background: '#0AB8ED'}}>Contact</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link text-white rounded-lg" to="/exams" activeStyle={{ background: '#0AB8ED'}}>Exams</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/register" activeStyle={{ background: '#0AB8ED'}}>Register</NavLink>
              </li>

              {
                     this.props.isAuthenticated ?

                     <li className="nav-item" >
                      <Dropdown >
                          <Dropdown.Toggle variant="dark" id="dropdown-basic" 
                        >
                            Profile
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/" onClick={this.props.logout}>Logout</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
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