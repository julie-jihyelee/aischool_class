function addNumber(num1, num2){
    let result = num1+num2
    // console.log(`${number1} + ${number2} : ${sum}`)
    return result;
    //return문 : 함수를 실행한 위치로 결과값을 던져준다.
    //- 실행한 결과값을 활용해야 할 때 사용 (다른 연산, 매개변수로 사용)
}

function minusNumber(num1, num2){
    let result = num1-num2
    return result;

    //return num1-num2
}

function mulNumber(num1,num2){
    let result = num1*num2
    return result;
    //return num1*num2
}

function divNumber(num1,num2){
    let result = num1/num2
    return result;
    //return num1/num2
}

function calculator(inputNum1, choice, inputNum2){
    let result = 0;
    if(choice==='1'){
        result = addNumber(inputNum1, inputNum2);
        //addNumber는 결과값을 반환해주는 함수이기 때문에 출력을 하려면
        //console.log()함수에 넣어줘야 출력할 수 있다.
        
    }else if(choice==='2'){
        result =minusNumber(inputNum1, inputNum2);
    }else if(choice==='3'){
        result =mulNumber(inputNum1, inputNum2);
    }else if(choice==='4'){
        result =divNumber(inputNum1, inputNum2);
    }else{
        alert('해당 사항이 없는 연산입니다. 다시 입력해주세요.')
    }

    console.log(`두 수의 연산결과 : ${result}`);
}


//1. 입력받을 데이터를 html에 정의
//2. 
//3.
//4.
//5.
//6.