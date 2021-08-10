import React from 'react'
import Header from './Header'

function Home({list}) {
    return (
        <>
            <Header/>
            <ul>
                {list}
            </ul>
        </>
    )
}

export default Home
