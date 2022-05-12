const numericButn=Array.from(document.querySelectorAll('.numeric-button'));
console.log(numericButn)
// console.log(screenTxt)
// const screenTxt = document.querySelector('.screen-text').innerText;

numericButn.forEach((currEle)=>{
    currEle.addEventListener('click', ()=>{
        //to be executed when equel to is pressed
// const screenTxt = Number(document.querySelector('.screen-text').innerHTML);
// const num1  = Number(currEle.innerHTML);
// const screenData = screenTxt;
// const NewValue = num1+screenData;
// console.log(NewValue)
// const screenValue = document.getElementById('value');

// screenValue.innerText=NewValue;

const screenTxt = Number(document.querySelector('.screen-text').innerHTML);
console.log('')

})
})