import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hoursList = document.getElementById("hours")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")
    const isHourPast = dayjs(date).add(Number(scheduleHour), "hour").isBefore(dayjs())

    return {
      hour,
      available: !isHourPast,
    }

  })

  const html = opening.map(({ hour, available }) => {
    let block = ""

    if (hour === "9:00") {
      block += `<li class="hour-period">Morning</li>`
    } else if (hour === "13:00") {
      block += `<li class="hour-period">Afternoon</li>`
    } else if (hour === "18:00") {
      block += `<li class="hour-period">Evening</li>`
    }

    block += `
      <li value="${hour}" class="hour ${available ? "hour-available" : "hour-unavailable"}">
        ${hour}
      </li>
    `
    return block

  })

  hoursList.innerHTML = html.join("")

  hoursClick()

}