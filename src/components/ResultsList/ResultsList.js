import React from 'react'
import Result from '../Result/Result'

const ResultsList = ({ results }) => {
    const renderResults = () => {
        return (
            <>
                <span>Tv Shows</span>
                {results['tvShows'].map((tvShow, index) => {
                    return <Result resultData={tvShow} key={index} />
                })}

                <div />

                <span>Movies</span>
                {results['movies'].map((movie, index) => {
                    return <Result resultData={movie} key={index} />
                })}

                <div />

                <span>Actor/Actress</span>
                {results['people'].map((person, index) => {
                    return <Result resultData={person} key={index} />
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
