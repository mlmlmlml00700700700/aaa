import React from 'react'
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({video, type}) {
  const {thumbnails,title, channelTitle,publishedAt } = video.snippet;

  const navigate = useNavigate();
  const isList = type === "list"; //프롭스로 받아온거가 있으면

  return (
    <li className={isList ? 'flex gap-1 m-4 cursor-pointer' : 'cursor-pointer'}  onClick={()=>{ navigate(`/videos/watch/${video.id}`,{state:{video}} )}}>
      <img className={isList ? 'w-40 mr-4' : 'w-full'}  src={thumbnails.medium.url} alt={title}></img>
      <div>
        <p className={
						isList
							? 'text-medium font-normal line-clamp-2'
							: 'text-lg mb-2 leading-6 line-clamp-2'
					} >{title}</p>
        <p className='text-sm opacity-70'>{channelTitle}</p>
        <p className='text-sm opacity-70'>{formatAgo(publishedAt,'ko')}</p>              
      </div>
    </li>
  )
}
