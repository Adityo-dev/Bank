// DRY - ----------> Do not Repeat yourself
document.getElementById('btn-deposit').addEventListener("click", function () {

    /* 
    1. get the element by id 
    2. get the value from the element 
    3.convert string value to number
    */
    const newDepositAmount = getInputFieldValueById('deposit-field');

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    /* 
    1.get previous deposit total by id 
    */
    const previousDepositTotal = getElementValueById('deposit-total');

    /* 
    1. Calculate new deposit total 
    */
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    /* 
    1. set deposite total value 
    */
    setTextElementValueById('deposit-total', currentDepositTotal)

    /* 
    1. get previous balance by6 using the function 
    */
    const previousBalanceTotal = getElementValueById('balance-total');
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', currentBalanceTotal);
}) 