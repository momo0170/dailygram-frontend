export default function convertDate(str) {
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const year = new Date(str).getFullYear();
  const month = new Date(str).getMonth();
  const date = new Date(str).getDate();
  const day = new Date(str).getDay();
  return `${year}년 ${month + 1}월 ${date}일 ${days[day]}`;
}
