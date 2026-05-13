import { apiConfig } from "./api-config" 

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Schedule canceled successfully!")
    
  } catch (error) {
    console.error("Error canceling schedule:", error)
    alert("Ops, something went wrong. Try again later.")
  }
}