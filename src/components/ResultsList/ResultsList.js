import React from 'react'
import Result from '../Result/Result'

const ResultsList = ({ results }) => {
    const renderResults = () => {
        return (
            <>
                <span>Tv Shows</span>
                {results['tvShows'].map((tvShow, index) => {
                    return <Result category="tvShows" resultData={tvShow} key={index} />
                })}

                <div />

                <span>Movies</span>
                {results['movies'].map((movie, index) => {
                    return <Result category="movies" resultData={movie} key={index} />
                })}

                <div />

                <span>Actor/Actress</span>
                {results['people'].map((person, index) => {
                    return <Result category="people" resultData={person} key={index} />
                })}
            </>
        )
    }
    return (
        <ul>
            {renderResults()}
        </ul>
    )
}

export default ResultsList
