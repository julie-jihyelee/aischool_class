function addNumber(number1, number2){
    let sum = number1+number2
    console.log(`${number1} + ${number2} : ${sum}`)
}

function minusNumber(num1, num2){
    console.log(`${num1} - ${num2} : ${num1-num2}`)
}

function mulNumber(num1,num2){
    console.log(`${num1} x ${num2} : ${num1*num2}`);
}

function divNumber(num1,num2){
    console.log(`${num1} / ${num2}: ${num1/num2}`);
}

function calculator(inputNum1, choice, inputNum2){
    if(choice==='1'){
        addNumber(inputNum1, inputNum2);
    } else if(choice==='2'){
        minusNumber(inputNum1, inputNum2);
    } else if(choice==='3'){
        mulNumber(inputNum1, inputNum2);
    } else if(choice==='4'){
        divNumber(inputNum1, inputNum2);
    } else{
        alert('해당 사항이 없는 연산입니다. 다시 입력해주세요.')
    }
}