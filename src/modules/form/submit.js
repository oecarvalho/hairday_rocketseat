import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');

//data atual
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

//carregando data atual
selectedDate.value = inputToday;

//define a data minima para cadastro
selectedDate.min = inputToday;


form.onsubmit = (event) => {
    event.preventDefault();

    console.log("enviado")
}