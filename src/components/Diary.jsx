import React from 'react';

export default function Diary({ diary }) {
  const { nickname, createdAt, text, url } = diary;
  return (
    <li>
      {/* text는 추후에 카드 이미지로 변경 예정 */}
      <div>{text}</div>
      <div>
        <div>
          <img src={url} alt="profile-img" />
          <span>{nickname}</span>
        </div>
        <div>{createdAt.slice(0, 15)}</div>
      </div>
    </li>
  );
}
