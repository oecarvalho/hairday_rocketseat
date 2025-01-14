import { hoursLoad } from "../form/hours-load.js";

//selecionando o input de data
const selectedDate = document.getElementById('date')

export function schedulesDay(){

    const date = selectedDate.value

    hoursLoad({date})
}