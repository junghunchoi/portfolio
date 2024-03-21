import {ref} from 'vue';

export function useAlert() {
  const alerts = ref([]);
  const vAlert = (message, type = 'error')=>{
    alerts.value.push({message, type});
    setTimeout(() => {
      alerts.value.shift();
    }, 2000);
  };
  const vSucceess = message =>vAlert(message,'success');

  return{
    alerts,
    vAlert,
    vSucceess
  }
}