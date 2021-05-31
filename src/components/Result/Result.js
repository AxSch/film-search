import React from 'react'
import { Link } from 'react-router-dom'

const Result = ({ resultData, category }) => {

    const handleCategory = () => {
        if (category === 'movies') {
            return (
                <li>
                    <Link to={`/item/${resultData.id}&category=${category}`}>
                        <span>{resultData.title}</span>
                    </Link>
                </li>
            )
        } else {
            return (
                <li>
                    <Link to={`/item/${resultData.id}&category=${category}`}>
                        <span>{resultData.name}</span>
                        <span>{resultData.known_for_department}</span>
                    </Link>
                </li>
            )
        }
    }

    return (
        <>
            {handleCategory()}
        </>
    )
}

export default Result
