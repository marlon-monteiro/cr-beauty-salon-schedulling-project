import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { apiConfig } from './api-config';

dayjs.extend(utc);

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    const data = await response.json();

    const dailySchedules = data.filter((schedule) => {
      return dayjs.utc(date).isSame(dayjs.utc(schedule.when), 'day');
    });

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert('Não foi possível buscar os agendamentos do dia selecionado');
  }
}
