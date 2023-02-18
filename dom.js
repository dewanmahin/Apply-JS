// ===================================================
// Create & add element in list item
// ===================================================
const li = document.createElement("li");
li.innerText = "Blog list 4";
const ul = document.getElementById("blog-list");
ul.appendChild(li);

// ===================================================
// Event Handlers
// ===================================================
// ========== with Onclick ==========
function handleJustFunctionClick(){
    const clickingMethod = document.getElementById("clicking-method");
    clickingMethod.innerText = "set by using function";
}

// ========== Direct ==========
document.getElementById("handle-event").addEventListener("click", function(){
    const p = document.getElementById("clicking-method");
    p.innerText = "set by direct add event listener";
})

// ========== Direct with input field ==========
document.getElementById("update-name").addEventListener("click", function(){
    const nameField = document.getElementById("name-field");
    const p = document.getElementById("clicking-method");
    p.innerText = nameField.value;
    nameField.value = "";
    // OR
    // console.log(nameField.value);
})

// ===================================================
// Display a comment
// ===================================================
document.getElementById("submit-comment").addEventListener("click", function(){

    // get user comment
    const commentBox = document.getElementById("new-comment");
    const userComment = commentBox.value;

    // create comment paragraph
    const newComment = document.createElement("p");
    newComment.innerText = userComment;

    // append the comment
    const commentContainer = document.getElementById("comment-conatiner");
    commentContainer.appendChild(newComment);

    // clean the comment box
    commentBox.value = "";
})

// ===================================================
// Delete button just like github
// ===================================================
// ========== HTML ==========
/* 
<h3 id="secret-info">Very very important secret information</h3>
<input id="delete-confirm" type="text" placeholder="Please type delete">
<button id="delete-btn" disabled>Delete</button> 
*/

document.getElementById("delete-btn").addEventListener("click", function(){
    document.getElementById("secret-info").style.display = "none";
})

document.getElementById("delete-confirm").addEventListener("focus", function(){
    // console.log('O! amar dike takaiyse :D')
    document.body.style.backgroundColor = "lightcoral";
})

document.getElementById('delete-confirm').addEventListener('blur', function(){
    document.body.style.background = "white";
})

document.getElementById("delete-confirm").addEventListener('keyup', function(event){
    const deleteBtn = document.getElementById("delete-btn");
    if(event.target.value == "delete"){
        deleteBtn.removeAttribute("disabled");
    }else{
        deleteBtn.setAttribute("disabled", true);
    }
})

// document.getElementById("delete-confirm").addEventListener('keyup', function(){
//     const deleteField = document.getElementById("delete-confirm");
//     console.log(deleteField.value);
// })

// document.getElementById("delete-confirm").addEventListener('change', function(){
//     const deleteField = document.getElementById("delete-confirm");
//     console.log(deleteField.value);
// })

// ===================================================
// Event delegate
// ===================================================
// ========== HTML ==========
/* 
<ul id="item-container">
    <li class="item">Lorem, ipsum.</li>
    <li class="item">Saepe, dolorem!</li>
    <li class="item">Nemo, neces.</li>
    <li class="item">Quod, vel.</li>
    <li class="item">Ipsa, at.</li>
    <li class="item">Perfer, cumque.</li>
</ul>
<button id="add-item">Add Item</button> 
*/

document.getElementById("add-item").addEventListener("click", function(){
    const li = document.createElement("li");
    li.innerText = "Brand New Item";
    li.classList.add('item');
    const parent = document.getElementById("item-container");
    parent.appendChild(li);
})

document.getElementById("item-container").addEventListener("click",function(event){
    event.target.parentNode.removeChild(event.target);
})

// ===================================================
// Searching string as a product
// ===================================================
const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
]
const searching = "dell";

const output = [];

// indexOf
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}

// includes
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
}

// Starts with
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    };
}

// Ends with
for(const product of products){
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);

// ===================================================
// Sorting big numbers by compare function
// ===================================================
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function(a, b){
    return a - b;
});
console.log(sortedBigNumbers);

// ===================================================
// Addition numbers & srtrng without calling parameters
// ===================================================
// Numbers
function addNumbers(){
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    return result;
}
const result = addNumbers(23, 13, 50, 100, 420, 4);
console.log(result);
// String
function getFullName(firstName, lastName){
    let fullName = "";
    for(const part of arguments){
        fullName = fullName + part + " ";
    }
    return fullName;
}
const name = getFullName("Omuk", "Songket", "bin", "Hanif", "Songket");
console.log(name);