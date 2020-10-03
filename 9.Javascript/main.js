// *String, Number, Boolean, null, undefined

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof x);

//*Concatenation
console.log('My Name is'+ name +'and iam'+ age);
//*Template
const hello = `My name is ${name} and I am ${age}`;
const s = 'technology, computer, it, code';

console.log(hello);
console.log(hello.length);
console.log(hello.toLowerCase());
console.log(hello.substring(0,7).toUpperCase());
console.log(hello.split(''));
console.log(s.split(','));

//*Array - variables that hold multiple values
const numbers = new Array(1,2,3);
const fruits = ['apples','oranges','pears'];
console.log(fruits);
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits.indexOf('oranges'))

const person = {
    firstName: 'Patrick',
    lastName: 'Morder',
    age: 30,
    hobbies: ['music','movies','mango','coffee shop'],
    address: {
        street: '86 Dang Dung',
        city: 'Da Nang'
    }
}
person.email = 'mahongphuc13@gmail.com'
console.log(person)


//*Array
const todos = [
    {
        id: 1,
        text: 'Take care of it',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Idontknow',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Just do it',
        isCompleted: false
    }
]
console.log(todos);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//*For
for(let i = 0; i < todos.length; i++)
{
    console.log(todos[i].text);
}

for(let td of todos)
{
    console.log(td.text);
}

//* forEach, map, filter
todos.forEach(function(td){
    console.log(td.text)
})

const todoText = todos.map(function(tda){
    return tda.text;
})
console.log(todoText)

const todoiscompleted = todos.filter(function(tdaa){
    return tdaa.isCompleted == true;
}).map(function(tdaa){
    return tdaa.text;
})
console.log(todoiscompleted)

//*If else statement
const a = 11;
const color = a > 10 ? 'red' : 'blue';
console.log(color)

//*function

const addNums = (num1,num2) => num1 + num2;
console.log(addNums(5,5))

//*Next
function myself(MyName, Myage, dob)
{
    this.MyName = MyName
    this.Myage = Myage
    this.dob = new Date(dob)
    this.getBirthYear = function()
    {
        return this.dob.getFullYear()
    }
    this.getFullName = function()
    {
        return `${this.MyName}`
    }
}
myself.prototype.getFullMyName = function()
{
    return `${this.MyName} ${this.Myage}`
}
myself.prototype.getFullBirthYear = function()
{
    return this.dob.getFullYear()
}
//*Instantiate object
const person1 = new myself('Patrick Morder','23','04-04-1998 1:02')
console.log(person1)
console.log(person1.dob.getFullYear())
console.log(person1.getBirthYear())
console.log(person1.getFullName())
console.log(person1.dob)
console.log(person1.getFullMyName())

//*CLass
class person3
{
    constructor(Yourfirstname, Yourlastname, yourdob)
    {
        this.Yourfirstname = Yourfirstname;
        this.Yourlastname = Yourlastname;
        this.yourdob = yourdob;
    }
    getYourBirthYear()
    {
        return this.dob.getFullYear()
    }
    getFullYourName()
    {
        return`${this.Yourfirstname}${this.Yourlastname}`
    }
}
const person4 = new person3('Patrick','Morder','04-13-1998')
console.log(person4.getFullYourName())

//!DOM

console.log(window)
//*Single element
console.log(document.getElementById('my-form'))
console.log(document.querySelector('h1'))
//*Multiple element
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))

const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item))

//*ul.remove()
//const ul = document.querySelector('.items')
//ul.remove()
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello'
//ul.children[1].innerText = 'Ass'
//ul.lastElementChild.innerHTML = '<h1>Hello There</h1>'

//btn.style.background = 'red'
//const btn = document.querySelector('.btn')
/*btn.addEventListener('click',(e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target)
    console.log(e.target.className)
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
})*/

//
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#user')

myForm.addEventListener('submit', onSubmit)
function onSubmit(e)
{
    e.preventDefault()
    if(nameInput.value === '' || emailInput.value === '')
    {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(), 3000)
    }
    else
    {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
        userList.appendChild(li)
        //*clear the fields
        nameInput.value = ''
        emailInput.value = ''
    }
}
