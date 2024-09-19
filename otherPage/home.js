const addMoneyForm = document.getElementById("add-money-form");

// document.getElementById('add-money-btn-up').addEventListener('click', function(){

//   addMoneyForm.style.display = 'block'

document
  .getElementById("add-money-btn-down")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const balanceAmount = document.getElementById("balance-amount");
    const amount = document.getElementById("amount");
    const password = document.getElementById("password");

    if (String(password.value) === "1111") {
      let balanceAmountFinal = Number(balanceAmount.innerText);

      balanceAmountFinal += Number(amount.value);

      balanceAmount.innerText = balanceAmountFinal;


      document.getElementById('successfully-added').innerText = 'Successfully Added...';
      document.getElementById('wrong-password').innerText = '';
      
      amount.value = "";
      password.value = "";
    } else {
      document.getElementById('successfully-added').innerText = '';
      document.getElementById('wrong-password').innerText = 'Wrong Password';
      amount.value = "";
      password.value = "";
    }
  });

// })
