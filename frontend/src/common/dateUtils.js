import dayjs from 'dayjs'

export function formatYYYYMMDD(date){
  return dayjs(date).format('YYYY-MM-DD');
}