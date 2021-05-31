import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentItem } from '../../reducers/searchResults/searchResultSlice'
import Result from '../Result/Result'

const ResultsList = ({ results, handleDropdown, filter }) => {
    const dispatch = useDispatch()

    const handleOnClick = (result) => {
        handleDropdown(false)
        dispatch(setCurrentItem(result))
    }

    const renderTVshows = (results, filter) => {
        if (filter === 'all' || filter === 'tvShows') {
            return (
                <div>
                    <span>Tv Shows</span>
                    {results['tvShows'].map((tvShow, index) => {
                        return (
                            <div onClick={() => handleOnClick(tvShow)} key={index}>
                                <Result category="tvShows" resultData={tvShow} />
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    const renderMovies = (results, filter) => {
        if (filter === 'all' || filter === 'movies') {
            return (
                <div>
                    <span>Movies</span>
                    {results['movies'].map((movie, index) => {
                        return (
                            <div onClick={() => handleOnClick(movie)} key={index}>
                                <Result category="movies" resultData={movie} />
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    const renderPeople = (results, filter) => {
        if (filter === 'all' || filter === 'people') {
            return (
                <div>
                    <span>People</span>
                    {results['people'].map((people, index) => {
                        return (
                            <div onClick={() => handleOnClick(people)} key={index}>
                                <Result category="people" resultData={people} />
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    const renderResults = () => {
        return (
            <>
                {renderTVshows(results, filter)}
                {renderMovies(results, filter)}
                {renderPeople(results, filter)}
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
