const historyValue = document.getElementById('history');
const currentValue = document.getElementById('currentText');
const numericButn = Array.from(document.querySelectorAll('.num'));
const functionalButton = Array.from(document.querySelectorAll('.fun'));

var num1 = '', num2 = '', operator = '';

function getScreen1() {
    return document.getElementById('currentText').innerText;
}
function setScreen1(value) {
    document.getElementById('currentText').innerText = value;
}
function setScreen2(value) {
    document.getElementById('history').innerHTML = value;
}
function getScreen2(){
    return document.getElementById('history').innerText;
}

numericButn.forEach(thisEle=>{
    thisEle.addEventListener('click',()=>{
        const OnScreen1= getScreen1();
        const NewScreen1 = OnScreen1 + thisEle.innerText;
        num1=NewScreen1;
        setScreen1(NewScreen1);
    })
})
functionalButton.forEach(thisEle=>{
    thisEle.addEventListener('click',()=>{
        num2=num1;
        num1='';
       setScreen2(num2+thisEle.innerText)
       setScreen1('')
       
    })
})


alert('This project is still on development process')