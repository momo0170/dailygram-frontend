import axios from 'axios';

export async function getAllDiary() {
  const response = await axios({
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}/diary`,
  });
  return response.data;
}
export async function getDiaryByNickname(nickname) {
  const response = await axios({
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}/diary?nickname=${nickname}`,
  });
  return response.data;
}
export async function postDiary(text, name, nickname, url) {
  const response = await axios({
    method: 'POST',
    url: `${process.env.REACT_APP_BASE_URL}/diary`,
    data: {
      text,
      name,
      nickname,
      url,
    },
  });
  return response.data;
}

export async function updateDiary(text, id) {
  const response = await axios({
    method: 'PUT',
    url: `${process.env.REACT_APP_BASE_URL}/diary/${id}`,
    data: {
      text: text,
    },
  });
  return response.data;
}

export async function deleteDiary(id) {
  await axios({
    method: 'DELETE',
    url: `${process.env.REACT_APP_BASE_URL}/diary/${id}`,
  });
}
