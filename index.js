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

    const currentSelectedDayNode = document.querySelector(".selected")
    if (currentSelectedDayNode !== null) {
        currentSelectedDayNode.classList.remove("selected")

    }

    const clickedDayNode = event.currentTarget
    clickedDayNode.classList.add("selected")

}

const createMeeting = () => {
    const meetingTime = document.getElementById("meeting-time").value
    const meetingDescription = document.getElementById("meeting-description").value
    const meeting = `${meetingTime} - ${meetingDescription}`


    const meetListNode = document.getElementById("meeting-list")

    const newMeetingNode = document.createElement("li")
    newMeetingNode.innerHTML = meeting
    meetListNode.appendChild(newMeetingNode)
}