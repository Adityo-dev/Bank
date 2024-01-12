// step - 1 --------------------->
document.getElementById('btn-deposit').addEventListener("click", function () {
    // step - 2 --------------------->
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step - 3 --------------------->
    depositField.value = '';

    // step - 4 --------------------->
    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step - 5 --------------------->
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    // step - 6 --------------------->
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;


    // step - 7 --------------------->
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // step - 8 --------------------->
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})



