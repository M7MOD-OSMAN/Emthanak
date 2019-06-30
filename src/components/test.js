test() { 
    console.log(localStorage.getItem('token'));
    axios.get('https://elshafeay.pythonanywhere.com/api/v2/exams/',

      {headers: 
        
        {
            'Content-Type': 'application/json',
            'Authorization':'Token '+localStorage.getItem("token")        }}
  )
  .then(res => {
      console.log(res);
  })
  .catch(err => {
      console.log('auth failed' + err)

  });
  }