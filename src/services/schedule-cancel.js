import { apiConfig } from './api-config.js';

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: 'DELETE'
    });
    console.log('passou pelo try do scheduleCancel');
    alert('Agendamento cancelado com sucesso');
  } catch (error) {
    console.log(error);
    alert('Não foi possível cancelar o agendamento');
  }
}
