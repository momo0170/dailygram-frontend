import React from 'react';

export default function Diary({ diary }) {
  const { nickname, createdAt, text } = diary;
  return (
    <>
      <div>
        <div></div>
        <div>
          <div>
            <div>{nickname}</div>
            <div>{text}</div>
          </div>
          <div>{createdAt.slice(0, 15)}</div>
        </div>
      </div>
      <button>수정</button>
      <button>삭제</button>
      <div>=========</div>
    </>
  );
}
