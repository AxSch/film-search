import React from 'react'
import { Link } from 'react-router-dom'

const Result = ({ resultData, category }) => {
    return (
        <li>
            <Link to={`/item/${resultData.id}&category=${category}`}>
                <span>{resultData.name}</span>
                <span>{resultData.known_for_department}</span>
            </Link>
        </li>
    )
}

export default Result
