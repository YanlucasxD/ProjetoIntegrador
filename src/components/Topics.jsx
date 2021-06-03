import React from 'react';
import { Link } from 'react-router-dom';

export default function Topics() {
    return (
        <section className="grid topics">
            <Link className="ash" to="/games/0">
                <h1>Pokémon: jogos e consoles raros da franquia são vendidos por R$ 400 mil</h1>
                <img src="https://s2.glbimg.com/sfRgyEXhSQxiJ-RinuDb6eJEax0=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/i/F/BUgaY0TMS4kTSXBjiHDA/pokemon-24-anos-desenho-animado-temporada.jpg" alt="" />
            </Link>
            <div className="dual">
                <Link to="/games/1">
                    <h1>Mass Effect e Subnautica são destaques nos lançamentos da semana</h1>
                    <img src="https://s2.glbimg.com/AS2sgbNy38ZNSjACEmJuV8HYKFs=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/R/A/4XMig9S7i6B8EIZOdnhA/lancamentos-semana-mass-effect-legendary-edition.jpg" alt="" />
                </Link>

                <Link to="/games/2">
                    <h1>Resident Evil: dez personagens assustadores dos jogos de terror</h1>
                    <img src="https://s2.glbimg.com/SDuYb_D60YeCNYvNqHSNtQz99ho=/0x0:1170x786/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/w/5/zKXQ6LQc65h9ANSkFNaA/resident-evil-3-d.jpg" alt="" />
                </Link>

            </div>
        </section>
    )
}