import React from 'react';
import { Link } from 'react-router-dom';
import gamelist from './games.json'



export default function Topics() {

    const highlights = gamelist.filter(game => game.highlight)

    return (
        <section className="grid topics">
            <Link className="ash" to={`/games/${highlights[0].id}`}>
                <h1>{highlights[0].title}</h1>
                <img src={highlights[0].highlightImage} alt="" />
            </Link>
            <div className="dual">
                <Link to={`/games/${highlights[1].id}`}>
                    <h1>{highlights[1].title}</h1>
                    <img src={highlights[1].highlightImage} alt="" />
                </Link>

                <Link to={`/games/${highlights[2].id}`}>
                    <h1>{highlights[2].title}</h1>
                    <img src={highlights[2].highlightImage} alt="" />
                </Link>

            </div>
        </section>
    )
}