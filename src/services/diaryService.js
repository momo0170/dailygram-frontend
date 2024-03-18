import axios from 'axios';

export async function getAllDiary() {
  const response = await axios({
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}/diary`,
  });
  return response.data;
}

export async function postDiary(text) {
  const response = await axios({
    method: 'POST',
    url: `${process.env.REACT_APP_BASE_URL}/diary`,
    data: {
      text: text,
      name: '창한',
      nickname: '심심하네진짜로',
      url: 'https://plus.unsplash.com/premium_photo-1709143101238-ed5c82ada0fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
    },
  });
  return response.data;
}
