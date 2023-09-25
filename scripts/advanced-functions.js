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
display(2);