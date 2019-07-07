import React, { Component } from 'react';
import axios from 'axios';

const Finished_exams = (Props) => {
    return (
        <div className="container0 mt-5 mp-5 ">
               <h1>Exam:{Props.name}  </h1> 
            <h2> Result:  {Props.result}%</h2>
               
           
               
               
         
        </div>
     

    );
}



class UserInfo extends Component {

//     state={
//         id:0,
//         dataa:[],
//         username:'',
//         is_teacher:null,
//         Finished_exams:[],
//         take_later_exams:[],
//         latest_result:0

//     }

//     getUserInfo = () => {
      
//         axios.get("http://elshafeay.pythonanywhere.com/api/v2/users/me/",
//         {headers:     
//           {
//             'Content-Type': 'application/json',
//             'Authorization':'Token '+localStorage.getItem("token")
//           }
//         }
//       )
//       .then(res => {
//        this.setState({
//         username:res.data.username,
//         id:res.data.id,
//         is_teacher:res.data.profile.is_teacher,
//         Finished_exams:res.data.Finished_exams,
//         take_later_exams:res.data.take_later_exams,
//         latest_result:res.data.latest_result
//        });
//       })
//     .catch(err => {
//         console.log('auth failed' + err)
  
//       });
// };

// componentDidMount(Props){
//     this.getUserInfo();
//    }



render(){
        

        const  exams = this.props.finished_exams
        

        return(
            <div className="container mt-5 pt-5">
                <h1>{this.props.username}</h1>
           
                   {exams? exams.map(item =>  <Finished_exams  name = {item.exam} result ={item.result}/>): ""}
            
            </div>
        )
    }
}



export default UserInfo;