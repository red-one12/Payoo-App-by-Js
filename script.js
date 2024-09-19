

document.getElementById('login-btn').addEventListener('click', function(event){
  const phoneNumber = document.getElementById('phone-number');
  const password = document.getElementById('password');
  
  


  if(Number(phoneNumber.value) === 12345 && password.value === '1111'){
    console.log('all done');
  }
  else{
    console.log('Phone Number or Password is incorrect...');
  }








  phoneNumber.value = '';
  password.value = '';
  



  event.preventDefault();
})
