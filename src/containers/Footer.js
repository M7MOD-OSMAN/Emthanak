import React from 'react';

const  Footer= () => {
    return (
        <footer className="  py-4 bg-dark">
           
            <ul className="list-inline text-center ">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-lg-center text-white h4" target="_blank" href="https://www.facebook.com/mhmoud.elgangidy">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-lg-center text-white h4" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-lg-center text-white h4" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-lg-center text-white h4" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item  text-white ">  {"  "}Copyright &copy; Emt7ank 2019 </li>

                                    </ul>
        </footer>
    );
  }
  
  export default Footer;