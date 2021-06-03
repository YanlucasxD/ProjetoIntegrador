import React from 'react'

import { Link } from 'react-router-dom';
export default function Noticias() {
  return (

    <section className="novidades">
      <Link>
        <div className="newsbody">
          <img src="https://s2.glbimg.com/AsspiD09ilba3y527mJE6w3y-Ds=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/Z/a/w4JFFkTTmY0kXsdT6IGQ/counter-strike-global-offensive-steam-recorde.jpg" />

          <div className="texto">
            <h2>CS:GO: como usar os comandos de treino 'exec.cfg' do FalleN</h2>
            <h3>Configurações podem ser usadas em servidores offline para treinar e aprimorar lançamentos de granadas, por exemplos</h3>
          </div>
        </div>
      </Link>
      <Link>
        <div className="newsbody">
          <img src="https://s2.glbimg.com/LeEpAwcQUohnJzR1ekwYrFwVIgg=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/Y/A/DUporVSMC8EBXgsrlwXQ/3fe6782a8c5732747561ce4ecb99f44d-960x540-blizz-mpfeaturecard-zs-mp-event-03.jpg" />

          <div className="texto">
            <h2>Jogador de CoD é banido da Twitch após ganhar R$ 60 mil em torneio</h2>
            <h3>Streamer conquistou prêmios no Twitch Rivals, campeonato organizado pela própria plataforma, e agora é suspeito de trapaça</h3>
          </div>
        </div>

      </Link>
      <Link>
        <div className="newsbody">
          <img src="https://s2.glbimg.com/iZV8UbU0s3mJGEci8QR-kc3gepg=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/6/p/bkf4SYS3GL57VF6zZimw/sonic-colors-ultimate.png" />

          <div className="texto">
            <h2>Sonic Colors Ultimate e novo jogo são anunciados nos 30 anos da franquia</h2>
            <h3>Um novo título com lançamento previsto para 2022 foi anunciado no Sonic Central, evento que comemora aniversário de 30 anos do personagem
</h3>
          </div>
        </div>

      </Link>
      <Link>
        <div className="newsbody">
          <img src="https://s2.glbimg.com/l1NyKi3ORFd7LZdCynRpfVYi358=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/R/e/XhnhEPQTAEuKOAeNbBzw/fortnite-ch02-s06-pt-br-deathstroke-social-1920x1080-1920x1080-80b3268124b5.jpg" />

          <div className="texto">
            <h2>Deathstroke no Fortnite: como participar do campeonato e ganhar o traje</h2>
            <h3>Vilão dos Jovens Titãs, Deathstroke também terá seu próprio evento no Battle Royale, o Campeonato Exterminador Zero</h3>
          </div>
        </div>

      </Link>
    </section>
  )
}
