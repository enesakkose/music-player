import React from 'react'
import SongCard from '@/components/SongCard'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import { Link } from 'react-router-dom'

function CardListLayout({ 
  title, 
  link, 
  data, 
  playlist = false, 
  onMouseOver = false, 
  ...props }) {
    
  return (
    <section className='cardListLayout'>
      <div className="cardListLayout__title">
        <h3>{title}</h3>
        <Link to={link}>See All</Link>
      </div>
      <div className="cardListLayout__list">
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
      </div>
    </section>
  )
}

export default CardListLayout