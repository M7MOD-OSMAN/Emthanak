import React from 'react';
import { Link } from 'react-router-dom';


const Content = () => {
    return (
        <div className="container w-100 h-100">

            <div className="row" >
                    <div className="col-lg-12 blockquote text-center">
                        <div className='pt-5'> <h2 className="mb-2 display-4">Advantages of taking these tests</h2>
                        </div>
                        
                        
                        <div className="p-3 mb-2 bg-info text-white" >
                            <h4 className="display-4">Engage your audience</h4>
                            <p>Engage your audience in a unique and fun way and connect them to your brand or learning material. By creating a returning event, you will improve your consumer loyalty.</p>
                        </div>
                    
                        <div>
                        <h4 className="display-4">Large number</h4>
                        <p>Taking online quizzes makes it possible to have a large number of participants. It could be up to a number of 1000 participants (and even more!). It doesn’t matter at what kind of location they take the online quiz as long as they are connected to the Internet.</p>
                        </div>
                        
                        <div className="p-3 mb-2 bg-info text-white">
                            <h4 className="display-4">No instructor needed</h4>
                            <p>Quizzes can be given without an instructor, which saves money and time :)</p>
                        </div>
                        
                        <div>
                            <h4 className="display-4">Set timer</h4>
                            <p>The creator is able to set a timer for the whole quiz or to set a timer per question. This is possible to do with written quizzes, but is very time consuming for the instructor. Plus it’s almost impossible to do with a huge amount of participants.</p>
                        </div>
                        
                        <div className="p-3 mb-2 bg-info text-white">
                            <h4 className="display-4">Better overview</h4>
                            <p>It’s possible to show one question at the time with online quizzes. People are not able to skip a question, because you will get a reminder that you can’t leave the answer blank.</p>
                        </div>
                        
                    </div>

            </div>
            <div className="row mb-4">
                <div className="col-md-8">
                    <h5>Conclusion</h5>
                    <p>A large number of participants, with instant results of your online quiz (for the creator as well as the participants), a better overview, you’re able to randomize your questions and set a timer. That all without the need of an instructor. What’s holding you back to not use online quizzes?</p>
                </div>
                <div className="col-md-4">
                    <Link className="btn btn-lg btn-primary btn-block" to="/register"><span>Register Now</span> </Link>
                    <Link className="btn btn-lg btn-primary btn-block" to="/quiz"><span>Take the quiz</span> </Link>

                </div>
                <a href="#top" className="btn btn-lg btn-primary btn-block"><span><i></i>Back to top</span></a>

        </div>
        </div>


    );
  }
  
  export default Content;