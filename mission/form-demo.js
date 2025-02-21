function togglePaymentDetails(event) {
    const paymentMethod = event.target.value;
    const creditCardContainer = document.querySelector(".hide:nth-of-type(1)"); 
    const paypalContainer = document.querySelector(".hide:nth-of-type(2)");
  
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
  
    document.getElementById("creditcard").removeAttribute("required");
    document.getElementById("paypalUser").removeAttribute("required");
  
    if (paymentMethod === "creditcard") {
      creditCardContainer.classList.remove("hide");
      document.getElementById("creditcard").setAttribute("required", "true");
    } else if (paymentMethod === "paypal") {
      paypalContainer.classList.remove("hide");
      document.getElementById("paypalUser").setAttribute("required", "true");
    }
  }
  
  document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);
  
  function validateForm(event) {
    const errors = [];
    let isValid = true;
  
    const fullName = document.getElementById("fullName").value;
    if (fullName !== "Bob") {
      isValid = false;
      errors.push("Only people named 'Bob' can submit this form.");
    }
  
    const creditCard = document.getElementById("creditcard").value;
    if (creditCard && creditCard !== "1234123412341234") {
      isValid = false;
      errors.push("Invalid credit card number. Only '1234123412341234' is accepted.");
    }
  
    if (!isValid) {
      event.preventDefault();
      showErrors(errors);
    }
  }
  
  document.getElementById("checkoutForm").addEventListener("submit", validateForm);
  