window.onload = function () {
    displayEntireMonth()
}

const displayEntireMonth = () => {

    let monthContainer = document.getElementById("month-container")


    for (let i = 1; i <= 31; i++) {

        let newDayNode = document.createElement("div")
        newDayNode.classList.add("day")
        newDayNode.innerText = i
        newDayNode.onclick = selectDay

        console.log(newDayNode)
        monthContainer.appendChild(newDayNode)
    }
}

const selectDay = (event) => {
    const clickedDayNode = event.currentTarget

    clickedDayNode.classList.add("select")

}