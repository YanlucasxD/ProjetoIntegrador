import React, { useEffect } from 'react'
import gamelist from './games.json'
import { Link } from 'react-router-dom';

const topscroll = () => {
  window.scrollTo({
    top: 0,
  });
};

export default function Noticias() {


 return (

    <section className="novidades">
      {gamelist.map(game => {
        if (!game.highlight)
          return (
            <Link to={`/games/${game.id}`} onClick={topscroll}>
              <div className="newsbody">
                <img src={game.highlightImage} />

                <div className="texto">
                  <h2>{game.title}</h2>
                  <h3>{game.subtitle}</h3>
                </div>
              </div>
            </Link>
          )
      })}

    </section>
  )
}
