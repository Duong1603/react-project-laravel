import React from 'react'
import Move_to_top from '../../Components/MoveToTop'
import Content from './Content'

export default function Home() {
    console.log("tesst api",process.env.REACT_APP_API_KEY);
    return (
        <>
            <Move_to_top/>
            <Content/>
        </>
    )
}
