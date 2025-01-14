import dayjs from 'dayjs';
import {openingHours} from '../../utils/opening-hours.js';

export function hoursLoad({date}){
    const opening = openingHours.map((hour)=>{

        //recuperando somente a hora
        const [scheduleHour] = hour.split(':')

        //adiciona a hora no date e verifica se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs())

        //define se o horário está disponível
        
        return{
            hour,
            avaliable: !isHourPast,
        }
    })

    console.log(opening)
}