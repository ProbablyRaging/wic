// pay rate inputs
const ordinary = document.getElementById('ordinary');
const loading = document.getElementById('loading');
const shift25 = document.getElementById('shift25');
const shift50 = document.getElementById('shift50');

// hours worked inputs
const monSat = document.getElementById('monsat');
const sun = document.getElementById('sun');

// get stored values
const ordinaryVal = localStorage.getItem('ordinary');
const loadingVal = localStorage.getItem('loading');
const shift25Val = localStorage.getItem('shift25');
const shift50Val = localStorage.getItem('shift50');

// set inputs with stored values
ordinary.value = ordinaryVal;
loading.value = loadingVal;
shift25.value = shift25Val;
shift50.value = shift50Val;

// result
const result = document.getElementById('result');

// hide placeholders on focus
monSat.addEventListener('focus', function () {
    monSat.classList.add('hide-placeholder');
});
monSat.addEventListener('blur', function () {
    monSat.classList.remove('hide-placeholder');
});
sun.addEventListener('focus', function () {
    sun.classList.add('hide-placeholder');
});
sun.addEventListener('blur', function () {
    sun.classList.remove('hide-placeholder');
});

// save button
const saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', function () {
    // save pay rate values locally
    localStorage.setItem('ordinary', ordinary.value);
    localStorage.setItem('loading', loading.value);
    localStorage.setItem('shift25', shift25.value);
    localStorage.setItem('shift50', shift50.value);

    const status = document.getElementById('status');
    status.classList.remove('hidden');
    setTimeout(() => {
        status.classList.add('hidden');
    }, 3000);
});

// calculate and display result
const calculateResult = () => {
    const monSatWage = parseFloat(ordinary.value) + parseFloat(loading.value) + parseFloat(shift25.value);
    const sunWage = parseFloat(ordinary.value) + parseFloat(loading.value) + parseFloat(shift50.value);

    const monSatVal = monSat.value;
    const sunVal = sun.value;

    const monSatIncome = monSatWage * monSatVal;
    const sunIncome = sunWage * sunVal;

    const totalIncome = monSatIncome + sunIncome;

    // display result
    result.innerHTML = `$${totalIncome.toFixed(2)}`;
};

// listen for input event on input boxes
monSat.addEventListener('input', calculateResult);
sun.addEventListener('input', calculateResult);