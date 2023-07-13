let classLists = document.querySelector('.lists');
let nameTask = document.querySelector('.nametask');
let dateTask = document.querySelector('.datetask');

function desabilitarTask(){
    const listas = document.querySelectorAll('.task');
    listas.forEach((li)=>{
        li.addEventListener("click", ()=>{
            li.innerHTML = "------------------";
        })
    })
}

function deletarTask(){
    const listas = document.querySelectorAll('.task');
    listas.forEach((li)=>{
        li.addEventListener("dblclick", ()=>{
            li.remove()
        })
    })
}

document.querySelector('.button_add').addEventListener("click", async()=>{
    if(nameTask.value !== "" && dateTask.value !== ""){
        const task = document.createElement("li");
        task.classList.add("task");
        task.innerHTML = `<a>${nameTask.value}</a> | ${dateTask.value}`;
        classLists.appendChild(task);
        deletarTask();
        desabilitarTask();
    }else{
        alert("preencha todos os campos!");
    }
})