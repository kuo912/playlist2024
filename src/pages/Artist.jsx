import React from 'react'
import Main from '../assets/components/section/Main'
import { artistText } from '../data/artist'
import { Link } from 'react-router-dom'

const Artist = () => {
  return (
    <Main
      title="Artist"
      description="아티스트를 추천합니다.">
      
      <section id='artistPage'>
        <h2>😪 추천 아티스트를 소개합니다.</h2>
        <div className="artist__inner">
          {artistText.map((artist, key) => (
            <div className="artist" key={key}>
              <div className="artist__img play__icon">
                <Link to={`/channerl/${artist.channelId}`}>
                  <img src={artist.img} alt={artist.name} />
                </Link>
              </div>
              <div className="artist__info">
              <Link to={`/channerl/${artist.channelId}`}>
                  {artist.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  )
}

export default Artist
