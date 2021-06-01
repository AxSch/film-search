import React from 'react'
import { Link } from 'react-router-dom'
import { ResultItem, ResultName } from './Result.styled'

const Result = ({ resultData, category }) => {
    const handleCategory = () => {
        if (category === 'movies') {
            return (
                <ResultItem>
                    <Link to={`/item/${resultData.id}&category=${category}`}>
                        <span>{resultData.title}</span>
                    </Link>
                </ResultItem>
            )
        } else {
            return (
                <ResultItem>
                    <Link to={`/item/${resultData.id}&category=${category}`}>
                        <ResultName>{resultData.name}</ResultName>
                        {resultData.known_for_department && resultData.known_for_department !== '' ? <span>- {resultData.known_for_department}</span> : null}
                    </Link>
                </ResultItem>
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
