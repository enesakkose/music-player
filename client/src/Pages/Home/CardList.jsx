import React from 'react'
import SongCard from '@/components/SongCard'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import CardListLayout from '@/components/CardListLayout'
import Card from '@/components/Card'
import Icon from '@/components/Icon'

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
          onMouseOver={onMouseOver ? () => props.setBgColor(`${item?.images?.joecolor?.slice(18,24)}`) : undefined}
        />     
      ))}
      {playlist && 
      <>
      <Card
        style={{ backgroundColor: 'var(--purple)', backgroundImage: 'var(--grayLinear)'}}
        title='Favorites'
        href='/collection/tracks'
        playBtn={false}
      >
        <Icon name='favorite' size={40}/>
      </Card>
      {data.map(item => <PlaylistInfoCard key={item.id} playlist={item}/>)}
      </>
      }
    </CardListLayout>
  )
}

export default CardList