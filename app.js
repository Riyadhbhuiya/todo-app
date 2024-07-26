console.log("Alive!")

let count = 1;
const submit = document.getElementById("submit");
//add task
function createTask() {
    //create outer div
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task")

    //span for index
    const span = document.createElement("span");
    span.setAttribute("class", "index")
    span.innerText = `${count}. ${Date.now()}`
    taskDiv.appendChild(span);

    //create p for text
    const taskText = document.createElement("p")
    //get input for text
    const textInput = document.getElementById("text");
    taskText.innerText = textInput.value;

    taskDiv.appendChild(taskText);

    //div for buttons

    const buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "buttons")

    //create buttons

    const delButton = document.createElement("button");
    delButton.innerText = "Delete";
    const doneButton = document.createElement("button");
    doneButton.innerText = "Done";

    doneButton.setAttribute("class", "finito")
    delButton.setAttribute("class", "deleteB")

    buttonsDiv.appendChild(doneButton);
    buttonsDiv.appendChild(delButton);

    taskDiv.appendChild(buttonsDiv)

    //add task to shower

    const shower = document.getElementById("shower");
    shower.appendChild(taskDiv);

    //update index
    count++;
}
//initialize everything on the dom
submit.addEventListener("click", () => {
    createTask()
    taskMove()
    taskDelete()
})

//delete task
function taskDelete() {
    const deleteButton = document.getElementsByClassName("deleteB");

    for (let button of deleteButton) {
        button.addEventListener("click", () => {
            button.parentNode.parentNode.remove();
            //console.log("cccc")
        })
    }
}

//done task and move task
function taskMove() {
    const doneButton = document.getElementsByClassName("finito");
    const doneSection = document.getElementById("done");

    for (let button of doneButton) {
        button.addEventListener("click", () => {
            button.parentNode.parentNode.remove();
            button.parentNode.parentNode.setAttribute("class", "done")
            doneSection.appendChild(button.parentNode.parentNode);
            button.style.display = "none";
        })
    }
}

