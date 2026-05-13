import dayjs from "dayjs"

import { schedulesNew } from "../../services/schedules-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday

selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        const name = clientName.value.trim()

        if (!name) {
           return  alert("Please, enter your name.")
        }

        const hourSelected = document.querySelector(".hour-selected")

        if (!hourSelected) {
            return alert("Please, select an hour.")
        }
        
        const [hour] = hourSelected.innerText.split(":")
        
        const when = dayjs(selectedDate.value).add(Number(hour), "hour").format("YYYY-MM-DD HH:mm")

        const id = new Date().getTime()
        
        await schedulesNew({ id, name, when })
        alert("Schedule created successfully!")

        await schedulesDay()

        clientName.value = ""   

    } catch (error) {
        
        alert("Ops, something went wrong. Try again later.")
    }
}