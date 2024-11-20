import { apiConfig } from './api-config.js';

export async function scheduleNew({ id, name, when }) {
  try {
    const result = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, when }),
    });

    console.log(result)

    alert('Agendamento realizado com sucesso');
  } catch (error) {
    console.log(error);
    alert('Não foi possível agendar.');
  }
}
