import React from 'react';
import Topics from '../components/Topics';
import Noticias from '../components/Noticias';
import Topscroll from '../components/Topscroll';
import Header from '../components/Header';

export default function Home() {
    return (
        <>
            <Header />
            <Topics />
            <Noticias />
            <Topscroll />
        </>
    )
}
