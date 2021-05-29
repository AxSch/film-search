import React from 'react'

const Result = ({ resultData }) => {
    return (
        <li>
            <span>{resultData.name}</span>
            <span>{resultData.known_for_department}</span>
        </li>
    )
}

export default Result
