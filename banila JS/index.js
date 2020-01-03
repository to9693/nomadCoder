let a = 221;
let b = a-5;
a = 4;
// 변수를 생성하고 초기화 하기 전에 let 을 쓴다.
// 변수를 고정할 때 const(constant, 상수) 를 쓴다.
// var는 let 처럼 바꿀수 있다. 
// console.log(b, a);

//  /* */ 사이에 넣으면 여러줄 주석 가능

// 모든 변수는 const 를 기본으로 한다.

/* string
const what = "353463";
console.log(what);
*/

/*
Bollean
const wat = true;
*/

/*
Number 
const wat = 666;
*/

/*
Float
const wat = 55.1;
*/

// camel case 변수명에는 띄어쓰기를 할 수 없으므로 띄어쓰기 대신 대문자를 쓴다.
// [](브라켓) 리스트로 array를 만든다.
// {}(컬리 브라켓) 으로 object 를 만든다. dictionary 형태
// array 와 object 의 차이첨은 objects는 이름을 정할 수 있따.
const daysOfWeek = ['Mon', 'Tue','Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// console.log(daysOfWeek[2]);

const nicolInfo = {
    name : "Nico",
    age: 33,
    gender : 'Male',
    inHandsome:true,
    favMovies : ["Along the gods", 'LOTR', 'Oldboy'],
    favFodd:[
        {name:'Kimchi', fatty:false}, 
        {name:'Chessebuger', fatty:true}
    ]
};
// array 안에 object, object 안에 array

nicolInfo.gender = 'Female'
// cost로 nicolInfo 로 고정했지만 변경가능
// console.log(nicolInfo);

// console.log(console)

// console.log('Grettings Nicolas')
// console.log('Grettings Jun')
// console.log('Grettings Liyn')
// console.log('Grettings Dal')

function sayHello(potato, age){
    console.log('Hello!', potato, 'you have', age,
    'years of age');
}
// 함수 안에 넣는 변수를 인자(argument)라고 함.
// sayHello('NIcolas', 15);

function sayHi(name, age){
    return `Hi ${name} you are ${age} years old`
};
// `` 백틱을 사용한다.

const greetNicolas = sayHi('Nicolas', 28 )

// console.log(greetNicolas)


const calculator ={
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multiple: function(a,b){
        return a*b;
    },
    division: function(a,b){
        return a/b;
    },
    square: function(a,b){
        return a**b;
    }
}

// console.log(greetNicolas)
const plus = calculator.plus(5,5)
const minus = calculator. minus(5,5)
const multiple = calculator.multiple(5,5)
const division = calculator.division(5,5)
const square = calculator.square(5,5)

// console.log('result :', plus, minus, multiple, division, square)
// console.log(`result : ${plus} ${minus} ${multiple} ${division} ${square}`)

 

const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';

/* function handelClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
} */

function handelClick(){
    title.classList.toggle(CLICKED_CLASS);
}
//  toggle 로 add와 remove를 한꺼번에 대채할 수 있음
function init() {
    title.addEventListener('click', handelClick);
}
init();

/*const BASE_COLOR = 'white';
const OTHER_COLOR = '#9c88ff';

title.innerHTML = 'Hi! From JS';
title.style.color ='white';
document.title = 'I own you now';


function handelClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = 'BASE_COLOR';
    title.addEventListener('mouseenter', handelClick);
}
init(); */

// 다양한 event 들은 MDN을 찾으면 나옴


/*const age = prompt('How old are you');
if (age >= 18 && age <= 21) {
    console.log('you can drink but you should not');
} else if (age >21) {
    console.log('go ahed');
} else {
    console.log('too young');
}*/

