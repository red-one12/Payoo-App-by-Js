const addMoneyForm = document.getElementById("add-money-form");
const cashOutForm = document.getElementById("cash-out-form");

document.getElementById("add-money-btn-up").addEventListener("click", function () {
  addMoneyForm.style.display = "block";
  cashOutForm.style.display = "none";

  document.getElementById("successfully-added-for-add").innerText = "";
  document.getElementById("wrong-password-for-add").innerText = "";
});

document.getElementById("cash-out-btn-up").addEventListener("click", function () {
  cashOutForm.style.display = "block";
  addMoneyForm.style.display = "none";

  document.getElementById("successfully-added-for-cash").innerText = "";
  document.getElementById("wrong-password-for-cash").innerText = "";
  document.getElementById("insufficient-for-cash").innerText = "";
});

document.getElementById("add-money-btn-down").addEventListener("click", function (event) {
  event.preventDefault();

  const balanceAmount = document.getElementById("balance-amount");
  const amount = document.getElementById("amount");
  const password = document.getElementById("password");

  if (password.value === "1111") {
    let balanceAmountFinal = Number(balanceAmount.innerText);
    balanceAmountFinal += Number(amount.value);

    balanceAmount.innerText = balanceAmountFinal;

    document.getElementById("successfully-added-for-add").innerText = "Successfully Added...";
    document.getElementById("wrong-password-for-add").innerText = "";

    amount.value = "";
    password.value = "";
  } else {
    document.getElementById("successfully-added-for-add").innerText = "";
    document.getElementById("wrong-password-for-add").innerText = "Wrong Password";
    amount.value = "";
    password.value = "";
  }
});

document.getElementById("cash-out-btn-down").addEventListener("click", function (event) {
  event.preventDefault();

  const balanceAmount = document.getElementById("balance-amount");
  const amount = document.getElementById("balance-amount-cash-out");
  const password = document.getElementById("password-cash-out");

  let balanceAmountFinal = Number(balanceAmount.innerText);

  if (Number(amount.value) <= balanceAmountFinal) {
    if (password.value === "1111") {
      balanceAmountFinal -= Number(amount.value);

      balanceAmount.innerText = balanceAmountFinal;

      document.getElementById("successfully-added-for-cash").innerText = "Successfully Transferred";
      document.getElementById("wrong-password-for-cash").innerText = "";
      document.getElementById("insufficient-for-cash").innerText = "";

      amount.value = "";
      password.value = "";
    } else {
      document.getElementById("successfully-added-for-cash").innerText = "";
      document.getElementById("wrong-password-for-cash").innerText = "Wrong Password";
      document.getElementById("insufficient-for-cash").innerText = "";

      amount.value = "";
      password.value = "";
    }
  } else {
    document.getElementById("successfully-added-for-cash").innerText = "";
    document.getElementById("wrong-password-for-cash").innerText = "";
    document.getElementById("insufficient-for-cash").innerText = "Insufficient Balance";

    amount.value = "";
    password.value = "";
  }
});
