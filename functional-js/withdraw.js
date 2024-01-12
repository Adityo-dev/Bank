// DRY - ----------> Do not Repeat yourself
document.getElementById('withdraw-Button').addEventListener("click", function () {

    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    const previousWithdrawTotal = getElementValueById('withdraw-total');
    
    const previousBalanceTotal = getElementValueById('balance-total');

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto Taka nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', currentWithdrawTotal);

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', currentBalanceTotal);
})