import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Move_to_top from '../../Components/MoveToTop'
import Content from './Content'

export default function Home() {
    return (
        <>
            <Move_to_top/>
            <Header/>
            <Content/>
            <Footer/>
        </>
    )
}
