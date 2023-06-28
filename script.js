const TextBoxInput = document.getElementById("input-box") ;
const Listcontainer = document.getElementById("list-container") ;

function AddTask()
{
    if(TextBoxInput.value === ''){
        alert("Write Your Task First!");
    }
    else{
        let element = document.createElement("li");
        element.innerHTML = TextBoxInput.value;
        Listcontainer.appendChild(element);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        element.appendChild(span);
    }
    TextBoxInput.value = "";
    StoreAfterRefresh();
}

Listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
    StoreAfterRefresh();
}, false);

function StoreAfterRefresh(){
    localStorage.setItem("data",Listcontainer.innerHTML);
}

function DisplaySavedData(){
    Listcontainer.innerHTML = localStorage.getItem("data");
}

DisplaySavedData();