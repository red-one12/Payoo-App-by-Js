

document.getElementById('login-btn').addEventListener('click', function(event){
  const phoneNumber = document.getElementById('phone-number');
  const password = document.getElementById('password');
  
  


  if(Number(phoneNumber.value) === 12345 && password.value === '1111'){
      window.location.href = "http://127.0.0.1:3000/otherPage/home.html";
  }
  else{
    console.log('Phone Number or Password is incorrect...');
  }








  phoneNumber.value = '';
  password.value = '';
  



  event.preventDefault();
})
