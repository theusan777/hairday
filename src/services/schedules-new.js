import { apiConfig } from "./api-config";

export async function schedulesNew({ id, name, when}) {
  try {

    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when
      }),
    })

  } catch (error) {
    console.error(error)
    alert("Ocorreu um erro ao agendar o horário. Por favor, tente novamente.")
  }
}