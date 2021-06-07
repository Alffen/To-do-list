
let data = [""]
let done = [""]

function formSubmit(event) {
    event.preventDefault()
        let input = document.getElementById("input").value
        data.push(input)
        let list = document.getElementById("todolist")
        list.innerHTML = ""
        for (let i = 1; i < data.length; i++) {
            list.innerHTML += `<li>
                                    <p>
                                        <span>${data[i]}</span>&nbsp;&nbsp;
                                        <button onClick="doneList(event,${i})" class="btn btn-primary btn-sm">&#10003;</button>
                                    </p>
                                </li>`
        }
}

function doneList(event, idx) {
    event.preventDefault()
    done.push(data[idx])
    data.splice(idx, 1)
    let list = document.getElementById("donelist")
    list.innerHTML = ""
    for (let i = 1; i < done.length; i++) {
        list.innerHTML += `<li>
                                <p>
                                    ${done[i]}&nbsp;&nbsp;<button onClick="deleteDone(event, ${i})" class="btn btn-danger btn-sm">&#10005;</button>
                                </p>
                            </li>`
    }

    list = document.getElementById("todolist")
    list.innerHTML = ""
    for (let i = 1; i < data.length; i++) {
        list.innerHTML += `<li>
                                <p>
                                    <span>${data[i]}</span>&nbsp;&nbsp;
                                    <button onClick="doneList(event, ${i})" class="btn btn-primary btn-sm">&#10003;</button>
                                </p>
                            </li>`
    }
}

function deleteDone(event, idx) {
    event.preventDefault()
    done.splice(idx, 1)
    let list = document.getElementById("donelist")
    list.innerHTML = ""
    for (let i = 1; i < done.length; i++) {
        list.innerHTML += `<li>
                                <p>
                                    ${done[i]}&nbsp;&nbsp;<button onClick="deleteDone(event, ${i})" class="btn btn-danger btn-sm">&#10005;</button>
                                </p>
                            </li>`
    }
}

// function delete(){
//     document.getElementById('somediv').innerHTML= "";
//     }