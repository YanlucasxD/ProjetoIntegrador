import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as MenuIcon } from '../assets/icon-menu.svg'
import { Link as ScrollLink } from 'react-scroll'
import gamelist from './games.json'

function limitText(text) {
  if (text.length > 35) {
    return text.substring(0, 35) + "..."
  }
  return text
}

const topscroll = () => {
  window.scrollTo({
    top: 0,
  });
};

export default function Header() {
  const { id } = useParams();

  const game = gamelist[id]

  return (
    <header>
      <div>
        {
          game && <button>
            <div>
              {game.description.map(content => {
                if (content.type === "subtitle") {
                  return <ScrollLink offset={-85} smooth={true} to={content.id}>{limitText(content.text)}</ScrollLink>
                }

              })}
            </div>
            <MenuIcon />
          menu
        </button>
        }
        <Link to="/" onClick={topscroll}><h1>JOGOS</h1> </Link>
      </div>
    </header>
  )
}