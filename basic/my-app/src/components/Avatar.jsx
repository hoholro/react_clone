import React from 'react'

export default function Avatar({image, isNew }) {
    return (
    <div className='avatar'>
   {/* js명령문으로 new인 사람만 아이콘 보이게 출력 */}
    {isNew && <span className="new">new</span>}
    <img
    className="photo"
    src={image}
    alt="avatar"
    />
    </div>
)
}
