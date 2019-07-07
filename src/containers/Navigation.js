import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import emt7ankLogo from '../svg/emt7ankLogo.svg'
import { Dropdown,DropdownButton} from 'react-bootstrap';

const {MenuItem} = DropdownButton;


class  Navigation extends Component {
  
  state = {value: ''};
	handleChange = (e) => {
    this.setState({value: e.target.value});       
  }
  SearchhandleSubmit = (e) => {
    console.log(this.props);
    this.props.history.push(`/exams?search=${this.state.value}`)


  }
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top ">

              

        <div className="container">
          
          <Link style={{padding: 0}} className="navbar-brand" to="/"> <img
          width="100" height="60" 
          src={emt7ankLogo} alt="logo"/>  </Link>

          <form onSubmit={this.SearchhandleSubmit} className="form-inline">

            <input  onChange={this.handleChange} value={this.state.value}
             className="form-control mr-sm-2" name="search" type="search" placeholder="Search exams" aria-label="Search"/>

            {/* <Link to={`/exams?search=${this.state.value}`}> */}
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            {/* </Link> */}
          </form>

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

                    <>
                    {
                      this.props.is_teacher ?

                       <li className="nav-item">
                      <NavLink className="nav-link text-white " to="/create-exam">Create Exam</NavLink>
                    </li>
                    :
                    null
                    }
                   

                     <li className="nav-item" >
                      <Dropdown >
                          <Dropdown.Toggle variant="dark" id="dropdown-basic" 
                          >
                            <a className="" data-toggle="dropdown"   href="#">
                                <i className="fa fa-user fa-fw"></i>
                                {this.props.username}
                            </a>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><i className="fa fa-envelope fa-fw"></i>User Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><i className="fa fa-gear fa-fw"></i> Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/" onClick={this.props.logout}><i className="fa fa-sign-out fa-fw"></i> Logout</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        {/* <DropdownButton eventKey={3} title='Bootstrap'>
                          <MenuItem eventKey='1'><i className="fa fa-envelope fa-fw"></i> User Profile</MenuItem>
                          <MenuItem eventKey='2'><i className="fa fa-gear fa-fw"></i> Settings</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey='3'><i className="fa fa-sign-out fa-fw"></i> Logout</MenuItem>
                        </DropdownButton> */}
                      </li>
                    

                    </>
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