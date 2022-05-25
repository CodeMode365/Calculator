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
function getScreen2() {
    return document.getElementById('history').innerText;
}

numericButn.forEach(thisEle => {
    thisEle.addEventListener('click', () => {
        const OnScreen1 = getScreen1();
        const NewScreen1 = OnScreen1 + thisEle.innerText;
        num1 = NewScreen1;
        setScreen1(NewScreen1);
    })
})

functionalButton.forEach(thisEle => {
    thisEle.addEventListener('click', () => {
        if (thisEle.innerHTML == '=') {
            let output = eval(getScreen2() + getScreen1());
            setScreen2(output);
            setScreen1('');
        }
        else if (thisEle.innerHTML == 'AC') {
            setScreen1('');
            setScreen2('');
        }
        else if (thisEle.innerHTML == "C") {
            setScreen1('');
        }
        else if (thisEle.innerHTML == "Del") {
            const value = getScreen1();
            const del = value.substring(0, value.length - 1);
            setScreen1(del);
        }
        else {
            const OnScreen1 = getScreen1();
            const NewScreen1 = OnScreen1 + thisEle.innerText;
            num1 = NewScreen1;
            setScreen1(NewScreen1);
        }

    })
})


alert('This project is still on development process')
alert('still some bugs remaining')