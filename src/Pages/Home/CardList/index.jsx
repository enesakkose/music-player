import React from 'react'
import SongCard from '@/components/Cards/SongCard'
import PlaylistInfoCard from '@/components/Cards/PlaylistInfoCard'
import CardListContainer from '@/components/CardListContainer'
import Card from '@/components/Card'
import Icon from '@/components/UI/Icon'
import styles from '@/Pages/Home/CardList/CardList.module.scss'

function CardList({
  title,
  link,
  data,
  playlist = false,
  onMouseOver = false,
  ...props
}) {

  const FavoritesCard = () => {
    return (
      <Card
        className={styles.favoritesCard}
        title='Favorites'
        href='/collection/tracks'
        playBtn={false}
      >
        <Icon name='favorite' size={40}/>
      </Card>
    )
  }

  return (
    <CardListContainer title={title} href={link}>
      {!playlist && data.map((item, index) => (
        <SongCard
          key={item.key}
          song={item}
          index={index}
          data={data}
          onMouseOver={onMouseOver ? () => props.setBgColor(`${item?.images?.joecolor?.slice(18, 24)}`) : undefined}
        />
      ))}
      
      {playlist &&
        <>
          <FavoritesCard/>
          {data.map(item => <PlaylistInfoCard key={item.id} playlist={item} />)}
        </>
      }
    </CardListContainer>
  )
}

export default CardList