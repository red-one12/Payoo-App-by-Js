

document.getElementById('login-btn').addEventListener('click', function(event){
  const phoneNumber = document.getElementById('phone-number');
  const password = document.getElementById('password');
  
  


  if(Number(phoneNumber.value) === 12345 && password.value === '1111'){
      window.location.href = "./otherPage/home.html"
  }
  else{
    document.getElementById('login-error').innerText = 'Your Phone Number or Password May be INCORRECT!!!';
  }








  phoneNumber.value = '';
  password.value = '';
  



  event.preventDefault();
})
