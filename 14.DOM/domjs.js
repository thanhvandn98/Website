//*Examine the document object
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// document.all[10].textContent = 'HELLO'
// console.log(document.forms)

//*Get element by id
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')
// console.log(headerTitle)
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'Good'
// header.style.borderBottom = 'solid 3px #000'

//*Get elements by class name
// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// items[1].textContent = 'Yup'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'green'
// for(var i = 0; i <= items.length; i++)
// {
//     items[i].style.backgroundColor = 'green'
// }

//*Get elements by tag name
// var li = document.getElementsByTagName('li')
// console.log(li)
// li[1].textContent = 'Yup'
// li[1].style.fontWeight = 'bold'
//  li[1].style.backgroundColor = 'green'
// for(var i = 0; i <= li.length; i++)
// {
//     li[i].style.backgroundColor = 'green'
// }

//*Query selector
// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #000'
// var input = document.querySelector('input')
// input.value = 'Hello World'
// var submit = document.querySelector('input[type = "submit"] ')
// submit.value = "SEND"
// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'
// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'
// var lastItem = document.querySelector('.list-group-item:nth-child(2)')
// lastItem.style.color = 'coral'

//*Query selector all
// var titles = document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent = 'Hello'
// var odd = document.querySelectorAll('li:nth-child(odd)')
// for(var i = 0; i <= odd.length; i++)
// {
//     odd[i].style.backgroundColor = '#f4f4f4'
// }

//*Part 2
// var itemList = document.querySelector('#items')
//*Parent node
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode)

// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement)

//*child nodes
// console.log(itemList.childNodes)
// console.log(itemList.children)
// console.log(itemList.children[2])
// itemList.children[2].style.backgroundColor = 'green'

//*first child
// console.log(itemList.firstChild)
//*first element child
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello 1'

//*first child
// console.log(itemList.lastChild)
//*first element child
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 3'

//* Next sibling
// console.log(itemList.nextSibling)
//*Next element sibling
// console.log(itemList.nextElementSibling)

//*previous Sibling
// console.log(itemList.previousSibling)
//*previous element sibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green'

//* Create Element
//* Create a div
// var newDiv = document.createElement('div')

//*add class
// newDiv.className = 'Hello'

//*add id
// newDiv.id = 'new'

//*add attr
// newDiv.setAttribute('title', 'hello div')

//*Create text node
// var newDivText = document.createTextNode('Hello guy')
//*Add text to div
// newDiv.appendChild(newDivText)

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')
// container.insertBefore(newDiv, h1)
// newDiv.style.fontSize = '30px'
// console.log(newDiv)

// var button = document.getElementById('button').addEventListener('click', buttonClick)
// function buttonClick(e)
// {
    // document.getElementById('header-title').textContent = 'That girl is kinda cute'
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.target.classList)
    // var output = document.getElementById('output')
    // output.innerHTML = '<h3>'+e.target.id+'</h3>'

    // console.log(e.type)
    // console.log(e.clientY)
    // console.log(e.clientX)
    // console.log(e.offsetX)
    // console.log(e.altKey)
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)
// }

// var button = document.getElementById('button')
// var box = document.getElementById('box')

// button.addEventListener('click', runEvent)
// button.addEventListener('dbclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)
// box.addEventListener('mousemove', runEvent)

// var itemInput = document.querySelector('input[type = "text"]')
// var form = document.querySelector('form')
// var select = document.querySelector('select')
// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)
// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)
// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)
// itemInput.addEventListener('input', runEvent)
// select.addEventListener('change',runEvent)
// form.addEventListener('submit', runEvent)
// function runEvent(e)
// {
    // e.preventDefault()
    // console.log('EVENT TYPE: '+e.type)
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>'
    // box.style.backgroundColor = "rgb(0, "+e.offsetX+", "+e.offsetY+")"
    // document.body.style.backgroundColor = "rgb(0, "+e.offsetX+", "+e.offsetY+")"
    // console.log('EVENT TYPE:'+e.type)
    // console.log(e.target.value)
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
    
// }

var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

//*Form submit event
form.addEventListener('submit', addItem)

//*Delete event
itemList.addEventListener('click', removeItem)

//*Filter event
filter.addEventListener('keyup', filterItems)

//*Add item
function addItem(e)
{
    e.preventDefault()
    console.log(1)
    //*Get input value
    var newItem = document.getElementById('item').value
    //*Create new li element
    var li = document.createElement('li')
    //*Add class
    li.className = 'list-group-item'
    console.log(li)
    //*Add text node with input value
    li.appendChild(document.createTextNode(newItem))
    //*Create delete button element
    var deleteBtn = document.createElement('button')
    //*Add class to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    //*Append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    //*append button to li
    li.appendChild(deleteBtn)
    //*append li to button
    itemList.appendChild(li)
}

//*Remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Sure?'))
        {
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

//*Filter item
function filterItems(e)
{
    //*convert to lowercase
    var text = e.target.value.toLowerCase()
    console.log(text)
    //*Get li
    var items = itemList.getElementsByTagName('li')
    //*Convert to an array
    Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent
        //*Not a match === -1// 
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block'
        }
        else
        {
            item.style.display = 'none'
        }
        
    })
}