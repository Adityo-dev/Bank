
// step - 1 --------------------->
document.getElementById('withdraw-Button').addEventListener("click", function () {


    // step - 2 --------------------->
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step - 3 --------------------->
    withdrawField.value = '';

    // step - 4 --------------------->
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step - 5 --------------------->
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // step - 7 --------------------->
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (previousBalanceTotal < newWithdrawAmount) {
        alert('Baap er bank e eto Taka nai');
        return;
    }



    // step - 6 --------------------->
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;



    // step - 8 --------------------->
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})