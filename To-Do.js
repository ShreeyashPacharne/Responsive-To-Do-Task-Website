
//assigning the id's to variables
const list = document.querySelector('#list')
const button = document.querySelector('#btn')
const remove = document.querySelector('#remove')


//adding the elements to the list and the local storage
button.onclick = function(){
    let task = document.querySelector('#todo').value
    let text = document.createTextNode(task)
    let a = document.createElement('li')
    a.appendChild(text);
    list.appendChild(a)
    storage(task)
    document.forms.myForm.reset()
}

//function for adding to the local storage
let i=0;
function storage(t){
    
    i++;

    window.localStorage.setItem(`${t}`,i)
    
}

//removing the element from the local storage and clearing the list
remove.onclick = function(){
    document.getElementById('list').innerHTML = "";
    window.localStorage.clear()
}