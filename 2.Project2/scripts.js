//start
//Function expression to select elements
const selectElement = (s) => document.querySelector(s);
//Open the menu on clicks
selectElement('.open').addEventListener('click',()=>{
    selectElement('.nav-list').classList.add('active');
})
//Close
selectElement('.close').addEventListener('click',()=>{
    selectElement('.nav-list').classList.remove('active');
})
