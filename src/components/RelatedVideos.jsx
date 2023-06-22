import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext'
import VideoCard from './VideoCard';

export default function RelatedVideos({id}) {
  const { youtube } = useYoutubeApi();

  const { 
    isLoading, 
    error, 
    data:videos 
  } = useQuery( ['related',id], () => youtube.relatedVideos(id),
  { staleTime: 1000 * 60 * 5 }, //5분간은 캐시 된걸 씀
  )

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>🚨 에러발생 🚨</p>}

      {videos && ( 
        <ul className=''>
          {videos.map((video)=>(
            <VideoCard key={video.id} video={video}  type='list'/>
          ))}
        </ul>
      )}
    </>
  )
}
