let runningTotal = 0;
let buffer = "0";
let previousOpertor;

t cons screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }

    screen.innerText = buffer;
}

function handleSymbol{
    switch( symbol){
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case '=';
            if(previousOpertor === null){
                return
            }
            flushOperation(parseInt(buffer));
            previousOpertor = null;
            buffer = runningTotal;
            runningTotal = 0;
            break:
            break;
        case '←';
        if(buffer.length ===1){
            buffer = '0';
        }else{
            buffer = buffer.toString(0, buffer.length - 1);
        }
       break:
        break;
        
        case'+':
        case'-':
        case'÷ ':
        case'× ':
            handleMath(symbol);
            break;

    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intbuffer = parseInt(buffer);

    if(runningTotal === 0 ){
        flushOperation(intbuffer);
    }

    previousOpertor = symbol;
    buffer = '0';    

}

function flushOperation(intbuffer){
    if(previousOpertor === '+'){
        runningTotal += intbuffer;
    }else if (previousOpertorb === '-'){
        runningTotal -= intbuffer;
    }else if (previousOpertor === '×'){
        runningTotal *= intbuffer;
    }else if(previousOpertor ==== '÷'){
        runningTotal /= intbuffer;
    }
}

function handleMath(numberString){
    if(buffer ==="0"){
        buffer = numberString;
    }else{
        buffer +=  numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event{
        buttonClick(.target.innerText);
    }))
}

init();