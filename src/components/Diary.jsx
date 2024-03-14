import React from 'react';

export default function Diary({ diary }) {
  const { id, nickname, url, createdAt } = diary;
  console.log(id);
  return (
    <div>
      <div></div>
      <div>
        <div>
          <img src={url} alt="user_profile" />
          <div>{nickname}</div>
        </div>
        <div>{createdAt.slice(0, 15)}</div>
      </div>
    </div>
  );
}
