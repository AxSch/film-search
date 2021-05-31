import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentItem } from '../../reducers/searchResults/searchResultSlice'
import Result from '../Result/Result'

const ResultsList = ({ results, handleDropdown }) => {
    const dispatch = useDispatch()

    const handleOnClick = (result) => {
        handleDropdown(false)
        dispatch(setCurrentItem(result))
    }

    const renderResults = () => {
        return (
            <>
                <span>Tv Shows</span>
                {results['tvShows'].map((tvShow, index) => {
                    return (
                        <div onClick={() => handleOnClick(tvShow)} key={index}>
                            <Result category="tvShows" resultData={tvShow} />
                        </div>
                    )
                })}

                <div />

                <span>Movies</span>
                {results['movies'].map((movie, index) => {
                    return (
                        <div onClick={() => handleOnClick(movie)} key={index}>
                            <Result category="movies" resultData={movie} />
                        </div>
                    )
                })}

                <div />

                <span>Actor/Actress</span>
                {results['people'].map((person, index) => {
                    return (
                        <div onClick={() => handleOnClick(person)} key={index}>
                            <Result category="people" resultData={person} />
                        </div>
                    )
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
