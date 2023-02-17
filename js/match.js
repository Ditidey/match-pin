function getPin() {
    const pin = generatePin();
    const pinStr = pin + '';
    if (pinStr.length === 4) {
        return pin;
    }
    else {
        getPin();
    }
}
function generatePin() {
    let pin = Math.round(Math.random() * 10000);
    return pin;
}

document.getElementById('match-btn').addEventListener('click', function () {
    const match = document.getElementById('match-input');
    const matchPin = match.value;
    const pin = getPin();
    match.value = pin;
})
/// typing pin
document.getElementById('calculate-full').addEventListener('click', function (event) {
    const pin = document.getElementById('cal-input');
    const pinBox = pin.value;

    const calculatePin = event.target.innerText;
    if (isNaN(calculatePin)) {
        if (calculatePin === 'c') {
            pin.value = '';
        }
        else if (calculatePin === '<') {
            const sPinBox = pinBox.split('');
            sPinBox.pop();
            const joinPinBox = sPinBox.join('');
            pin.value = joinPinBox;
        }
    }
    else {
        const newPin = pinBox + calculatePin;
        pin.value = newPin;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const rPin = document.getElementById('match-input');
    const randomPin = rPin.value;

    const tPin = document.getElementById('cal-input');
    const typePin = tPin.value;

    const successOutput = document.getElementById('success-pin');
    const failOutput = document.getElementById('fail-pin');
    if (randomPin === typePin)
    {
        failOutput.style.display = 'none';
        successOutput.style.display = 'block';
        window.location.href = 'door.html'
    }
    else 
    {
        successOutput.style.display = 'none';
        failOutput.style.display = 'block';
    }

})