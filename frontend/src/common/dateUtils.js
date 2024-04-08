import dayjs from 'dayjs'

export function formatYYYYMMDD(date){
  return dayjs(date).format('YYYY-MM-DD');
}

export function isCreatedWithin7Days(date) {
  const nowDate = dayjs();
  const regDate = dayjs(date);

  return nowDate.diff(regDate, 'day') <= 7;
}