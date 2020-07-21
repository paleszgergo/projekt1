function calcAmount() {
    let pricePerPiece = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amount = parseInt(amountInput.value);
    amount = isNaN(amount) ? 0 : amount;
    
    showAmount(amount);
    showSumPrice(pricePerPiece, amount);
  };
  
function showAmount(amount) {
    if (amount > 10) {
      alert("Maximum 10 terméket vásárolhat")
      return;
    } else if (amount < 1 ) {
      alert("Minimum 1 terméket kell vásárolnia")
      return;
  }
};
  
function showSumPrice(pricePerPiece, amount) {
    let extra = parseInt(document.querySelector('[name=extra]:checked').value);
    let sauce = parseInt(document.querySelector('[name=sauceInput]:checked').value);
    let priceField = document.querySelector("span.priceMessage");
    let totalAmount = amount * (pricePerPiece + extra + sauce);
    if (totalAmount < 5000) {
      totalAmount += 500;
    } else {
      totalAmount;
    } 
    priceField.innerHTML = totalAmount;
  };