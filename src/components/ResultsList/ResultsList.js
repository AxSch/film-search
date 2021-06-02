import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentItem } from '../../reducers/searchResults/searchResultSlice'
import Result from '../Result/Result'
import { Dropdown, Suggestions, ResultsSection, ResultsHeading } from './ResultsList.styled'

const ResultsList = ({ results, handleDropdown, filter, isDropdown }) => {
    const dispatch = useDispatch()

    const handleOnClick = (result) => {
        handleDropdown(false)
        dispatch(setCurrentItem(result))
    }

    const renderTVshows = (results, filter) => {
        if (filter === 'all' || filter === 'tvShows') {
            return (
                <ResultsSection data-testid="tvshowsSection">
                    <ResultsHeading>
                        <span>TV Shows</span>
                    </ResultsHeading>
                    <div>
                        {results['tvShows'].map((tvShow, index) => {
                            return (
                                <div onClick={() => handleOnClick(tvShow)} key={index}>
                                    <Result category="tvShows" resultData={tvShow} />
                                </div>
                            )
                        })}
                    </div>
                </ResultsSection>
            )
        }
    }

    const renderMovies = (results, filter) => {
        if (filter === 'all' || filter === 'movies') {
            return (
                <ResultsSection data-testid="moviesSection">
                    <ResultsHeading>
                        <span>Movies</span>
                    </ResultsHeading>
                    <div>
                        {results['movies'].map((movie, index) => {
                            return (
                                <div onClick={() => handleOnClick(movie)} key={index}>
                                    <Result category="movies" resultData={movie} />
                                </div>
                            )
                        })}
                    </div>
                </ResultsSection>
            )
        }
    }

    const renderPeople = (results, filter) => {
        if (filter === 'all' || filter === 'people') {
            return (
                <ResultsSection isPeople={true} data-testid="peopleSection">
                    <ResultsHeading>
                        <span>People</span>
                    </ResultsHeading>
                    <div>
                        {results['people'].map((people, index) => {
                            return (
                                <div onClick={() => handleOnClick(people)} key={index}>
                                    <Result category="people" resultData={people} isDropdown={isDropdown} />
                                </div>
                            )
                        })}
                    </div>
                </ResultsSection>
            )
        }
    }

    const renderResults = () => {
        return (
            <>
                {isDropdown ? <Suggestions data-testid="suggestions">Suggestions</Suggestions> : <h3 data-testid="results">Results</h3>}
                {renderTVshows(results, filter)}
                {renderMovies(results, filter)}
                {renderPeople(results, filter)}
            </>
        )
    }
    return (
        <Dropdown isDropdown={isDropdown} data-testid="resultsList">
            {renderResults()}
        </Dropdown>
    )
}

export default ResultsList
