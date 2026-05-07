import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

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

  hoursList.innerHTML = opening
    .map(
      ({ hour, available }) => `
      <li value="${hour}" class="hour ${available ? "hour-available" : "hour-unavailable"}">
        ${hour}
      </li>
    `
    )
    .join("")
}