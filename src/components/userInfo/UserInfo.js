// import React, { Component } from 'react';
// import axios from 'axios';


// class UserInfo extends Component {

//     state={
//         id:0,
//         dataa:[],
//         username:'',
//         is_teacher:null,
//         finished_exams:[],
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
//         finished_exams:res.data.finished_exams,
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



// render(){
        



//         return(
//             <div className="container mt-5 pt-5">
//                 <h1>{this.state.username}</h1>
//             </div>
//         )
//     }
// }



// export default UserInfo;