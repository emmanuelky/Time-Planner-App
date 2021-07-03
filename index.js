let meetingData = {}

window.onload = function () {
    readFromTheDisk()
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
    refreshMeetingList()
}




const createMeeting = () => {
    const meetingTime = document.getElementById("meeting-time").value
    const meetingDescription = document.getElementById("meeting-description").value


    let newMeeting = {
        time: meetingTime,
        description: meetingDescription
    }
    let meetingsForTheSelectedDay = getSelectedDayMeetings()
    meetingsForTheSelectedDay.push(newMeeting)
    saveToDisk()

    refreshMeetingList()


}





const getCurrentlySelectedDay = function () {
    return document.querySelector(".selected")
}





const getSelectedDayMeetings = function () {


    let currentlySelectedDayNode = getCurrentlySelectedDay()


    if (currentlySelectedDayNode === null) {
        return null
    }


    const selectedDayId = currentlySelectedDayNode.innerText


    let meetingsForTheDayArray = meetingData[selectedDayId]


    if (meetingsForTheDayArray === undefined) {
        meetingsForTheDayArray = []
        meetingData[selectedDayId] = meetingsForTheDayArray
    }

    return meetingsForTheDayArray
}





const refreshMeetingList = function () {
    const meetingListNode = document.getElementById("meetings-for-the-day")


    meetingListNode.innerHTML = ""


    const meetingsForTheSelectedDay = getSelectedDayMeetings()
    const meetingsListNode = document.getElementById("meetings-for-the-day")

    for (let meeting of meetingsForTheSelectedDay) {


        const newMeetingListItemNode = document.createElement("li")
        newMeetingListItemNode.innerText = `${meeting.time} - ${meeting.description}`


        meetingsListNode.appendChild(newMeetingListItemNode)
    }
}




const saveToDisk = function () {
    let json = JSON.stringify(meetingData)
    localStorage.setItem("Time-planner", json)
}




const readFromTheDisk = function () {
    let json = localStorage.getItem("Time-planner")

    if (json === null)
        meetingData = {}
    else
        meetingData = JSON.parse(json)
}
