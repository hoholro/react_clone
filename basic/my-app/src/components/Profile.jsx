import React from 'react';
import Avatar from './Avatar';

export default function Profile({ image, name, title, isNew}) {
  return (
    <div className="profile">
    {/* js명령문으로 new인 사람만 아이콘 보이게 출력 */}
    <Avatar image={image} isNew={isNew}/>
    <h1>{name}</h1>
    <p>{title}</p>
  </div>
);
}
