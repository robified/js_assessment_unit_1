// variable
let total;


// cached elements
let displayEl = document.querySelector('h1 span');
let but1El = document.getElementById('but1');
let inputEl = document.getElementById('text');
let but2El = document.getElementById('but2');


// event listeners
but1El.addEventListener('click', function(){
    total += parseFloat(inputEl.value);
    render();
});

but2El.addEventListener('click', function(){
    total -= parseFloat(inputEl.value);
    render();   
});


// functions
function init() {
    total = 0;
    render();
};

function render() {
    displayEl.textContent = total;
    inputEl.value = '1';
    displayEl.style.color = (total < 0) ? 'red' : 'black';
};

init();    