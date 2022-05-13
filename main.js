const numericButn = Array.from(document.querySelectorAll('.num'));
const functionalButton = Array.from(document.querySelectorAll('.fun'));


alert("This project is current on development process")
const ArraySotre = [...numericButn, ...functionalButton]
// console.log(ArraySotre)
// console.log(screenTxt)
// const screenTxt = document.querySelector('.screen-text').innerText;

ArraySotre.forEach((currEle) => {
    currEle.addEventListener('click', () => {


        //To show character on screen when clicked
        const screenTxt = document.querySelector('.screen-text').innerHTML;
        const screenValue = document.getElementById('value');
        const clickedChar = currEle.innerHTML;
        const finalText = screenTxt + clickedChar;
        screenValue.innerHTML = finalText;
        if (clickedChar == 'AC' || currEle.innerHTML == 'C') {
            screenValue.innerHTML = '';
        }
        if(clickedChar == '='){
            // let TOdelChar=clickedChar.replace(clickedChar.length-1, clickedChar.length);
            // clickedChar=clickedChar-TOdelChar;
            // clickedChar='';
            console.log(TOdelChar)
        }
    
    })
})