import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gamelist from '../components/games.json';
import Header from '../components/Header';

import Topscroll from '../components/Topscroll';

export default function Detailed() {
  const { id } = useParams();

  const game = gamelist[id]


  return (
    <>
      <Header />
      <section className="grid detailed">
        <h1>{game.title}</h1>
        <strong>{game.subtitle}</strong>
        <div>
          {game.description.map(content => {
            if (content.type === "paragraph") {
              return <p>{content.text}</p>
            } else if (content.type === "image") {
              return <img src={content.link} />
            }else if (content.type === "local-image"){
              return <img src={require(`../assets/${content.link}`).default} />
            }
            else return <h2 id={content.id}>{content.text}</h2>
          }
          )}
        </div>
      </section>

      <Topscroll />
    </>
  )
}