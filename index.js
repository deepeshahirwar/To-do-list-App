let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
 
function AddTask(){
  if(inputBox.value === ''){
    alert('You must write something!');
  }else{ 
    // add data to the list
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); 

 // to add cros icon 
 let span = document.createElement("span");
 span.innerHTML = "\u00d7"; 
 li.appendChild(span);

  } 
  inputBox.value = ""; 
  SaveData();
} 

// for deleting task 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked") 
        SaveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        SaveData();
    }
}, false);
         
// for saving our data in browser 
function SaveData(){
    localStorage.setItem("data", listContainer.innerHTML);
} 

// for showing our prevous task
function ShowingTask(){
   listContainer.innerHTML = localStorage.getItem("data"); 
} 
ShowingTask();