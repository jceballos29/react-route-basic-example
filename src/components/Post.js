import React from 'react'
import {Link} from 'react-router-dom'

function Post({id, entries}) {

    return (
        <div>
            <h2>{entries[id-1].title}</h2>
            <p>{entries[id-1].content}</p>
            <h6>{entries[id-1].author}</h6>
            <Link to="/home">Go Back.</Link>
        </div>
    )
}

export default Post
