let inputTodo = document.getElementById("input-todo")
let addTodo = document.getElementById("add-todo")

addTodo.addEventListener("click", e => {
    if (inputTodo.value != "") {
        let todo = document.createElement("div")
        todo.classList.add("todo")
        todo.textContent = inputTodo.value

        let btnContainer = document.createElement("div")
        btnContainer.classList.add("btn-container")

        let checkBox = document.createElement("input")
        checkBox.classList.add("completed")
        checkBox.setAttribute('type', 'checkbox')
        let delBtn = document.createElement("button")
        delBtn.classList.add("del-todo")
        delBtn.textContent = "Delete"
        delBtn.addEventListener("click", e => {
            todo.remove()
        })

        btnContainer.appendChild(checkBox)
        btnContainer.appendChild(delBtn)
        todo.appendChild(btnContainer)
        document.body.appendChild(todo)
        inputTodo.value = ""
    }
})
