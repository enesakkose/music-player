import React from 'react'
import SongCard from '@/components/SongCard'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import CardListLayout from '@/components/CardListLayout'

function CardList({ 
  title, 
  link, 
  data, 
  playlist = false, 
  onMouseOver = false, 
  ...props }) {
    
  return (
    <CardListLayout title={title} href={link}>
      {!playlist && data.map((item, index) => ( 
        <SongCard
          key={item.key} 
          song={item} 
          index={index}
          data={data}
          onMouseOver={onMouseOver ? () => props.setBgColor(`#${item?.images?.joecolor.slice(18,24)}`) : undefined}
        />     
      ))}
      {playlist && data.map(item => (
        <PlaylistInfoCard 
          key={item.id}
          playlist={item}
        />
      ))}
    </CardListLayout>
  )
}

export default CardList