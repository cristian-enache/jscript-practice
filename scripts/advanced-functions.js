/*
function greeting() {
    console.log('hello');
}
greeting();

const num = 2;
const function1 = function greeting(){
    console.log('hello 2');
};

console.log(function1);
function1();

const object = {
    num: 2,
    fun: function greeting(){
        console.log('hello 3');
    }
};
object.fun();

function display (param){
    console.log(param);
}
display(1);


setTimeout(function (){
    console.log('timeout');
}, 2000);

console.log('next time');

setInterval(function(){
    console.log('interval');
}, 2000);

console.log('next time 2')
*/

[
    'red',
    'yellow',
    'blue'
].forEach ((value, index) => {
    if(value === 'red'){
        return;
    }

    console.log(index);
    console.log(value);

});
//_______________________________________________________

const regularFunction = function (param1, param2){
    console.log('hi');
    return 2;
};

const arrowFunction = (param1, param2) => {
    console.log('hello');
    return 5;
};
arrowFunction();

const onePram = (param) => {
    console.log(param + 1)
};
onePram(2);

//one line arrow function
const oneLine = () => {
    return 2 + 3;
}
console.log(oneLine());

const oneLine1 = () => 2+5 ;
console.log(oneLine1());

//________________________________________

const obj2 = {
    method: () => {

    },
    method () {

    }
};

//___________________

const btnElement = document.querySelector('.js-btn');
const eListener = () => {
    console.log('click');
};

//btnElement.addEventListener('click', () => {console.log('click'); });
btnElement.addEventListener('click', eListener);

btnElement.removeEventListener('click', eListener );

btnElement.addEventListener('click', () => { console.log('click2'); } );
