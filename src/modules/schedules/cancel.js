import { scheduleCancel } from "../../services/schedule-cancel"
import { schedulesDay } from "./load.js"
const periods = document.querySelectorAll(".period")

periods.forEach(period => {
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li")
      const { id } = item.dataset

      if(id) {
        const isConfirmed = confirm("Are you sure you want to cancel this schedule?")
        if(isConfirmed) {
          try {
            await scheduleCancel({ id })
            item.remove()
          } catch (error) {
            alert("Ops, something went wrong. Try again later.")
          }
        }
      }
    }
  })
})