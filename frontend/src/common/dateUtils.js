import dayjs from 'dayjs'

/**
 * 주어진 날짜가 현재로부터 7일 이내에 생성되었는지 확인합니다.
 *
 * @param {string} date - 확인할 날짜 문자열.
 * @returns {boolean} 주어진 날짜가 7일 이내에 생성되었으면 true, 그렇지 않으면 false를 반환합니다.
 */
export function isCreatedWithin7Days(date) {
  const nowDate = dayjs();
  const regDate = dayjs(date);

  return nowDate.diff(regDate, 'day') <= 7;
}