
let counter = 0
let counterPaused = false

function plusCounter() {
    counter++
    document.getElementById("counter").innerText = counter
}

function minusCounter() {
    counter--
    document.getElementById("counter").innerText = counter
}

function like() {
    const number = document.getElementById("counter").innerText
    const li = document.createElement("li")
    li.id = number

    const ul = document.querySelector("ul")
    const items = ul.getElementsByTagName("li");
    let found = false
    if (items.length === 0) {
        const x = 1
        li.innerText = `${number} has been liked ${x} times!`
        document.querySelector("ul").append(li)

    } else {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === number) {
                console.log(true)
                const x = parseInt(items[i].innerText.split(" ")[4])
                document.getElementById(items[i].id).innerText = `${number} has been liked ${x + 1} times!`
                found = true
            }
        }
        if (!found) {
            const x = 1
            li.innerText = `${number} has been liked ${x} times!`
            document.querySelector("ul").append(li)
        }
    }
}
function pauseCounter() {
    counterPaused = !counterPaused
    const buttons = document.getElementsByTagName("button")
    for (const item of buttons) {
        if (item.id != "pause") {
            item.disabled = !item.disabled
        } else {
            if (item.innerText === "pause") {
                item.innerText = "resume"
            }
            else if (item.innerText === "resume") {
                item.innerText = "pause"
            }
        }
    }

}

function intervalIncrement() {
    if (!counterPaused) {
        plusCounter()
    }
}

function addComment(event) {
    event.preventDefault()
    const comment = document.getElementById("comment-input").value
    const p = document.createElement("p")
    p.innerText = comment
    document.getElementById("list").append(p)
}

setInterval(intervalIncrement, 1000)


document.getElementById("plus").addEventListener("click", plusCounter)
document.getElementById("minus").addEventListener("click", minusCounter)
document.getElementById("heart").addEventListener("click", like)
document.getElementById("pause").addEventListener("click", pauseCounter)
document.getElementById("comment-form").addEventListener("submit", e => addComment(e))