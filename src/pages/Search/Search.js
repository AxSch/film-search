import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchTVshows, fetchPeople } from '../../api/api'
import ResultsList from '../../components/ResultsList/ResultsList';
import { storeResults } from '../../reducers/searchResults/searchResultSlice';

const Search = () => {
    const [searchData, setSearchData] = useState({})
    const [isDropdown, setIsDropdown] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    let location = useLocation()

    const fetchSearchResults = async (value) => {
        const peopleResults = await fetchPeople(value)
        const tvShowResults = await fetchTVshows(value)
        const movieResults = await fetchMovies(value)
        setSearchData({ people: peopleResults.results, tvShows: tvShowResults.results, movies: movieResults.results })
    }
    
    const handleSearch = (value) => {
        if (value.length >= 5) {
            fetchSearchResults(value)
            setIsDropdown(true)
            setSearchQuery(value)
        }
        setSearchQuery(value)
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        setIsDropdown(false)
        const qs = new URLSearchParams({ item: searchQuery }).toString()
        if (Object.keys(searchData).length < 1) {
            fetchSearchResults(searchQuery)
            history.push({
                pathname: "/search",
                search: "?" + qs
            })
        }
        if (searchQuery === '') {
            setSearchData({})
            dispatch(storeResults(searchData))
        }
        dispatch(storeResults(searchData))
        history.push({
            pathname: "/search",
            search: "?" + qs
        })
    }

    const renderResultsList = () => {
        if (!isDropdown && Object.values(searchData)[0] !== undefined && location.search !== "") {
            return (
                <div>
                    <h3>Results</h3>
                    <ResultsList results={searchData} handleDropdown={setIsDropdown} />
                </div>
            )
        } else if (searchQuery === '') {
            return (
                <div>
                    <p>Please enter something to search</p>
                </div>
            )
        }
    }

    return (
        <div>
            <div>
                <h1>Search for an Actor, TV show & Movie</h1>
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="search">Search</label>
                <input type="search" id="search" onChange={e => handleSearch(e.target.value)} />
                <input type="submit" value="Submit" />
                {isDropdown && Object.keys(searchData).length > 0 && searchQuery !== '' ?
                    <ResultsList results={searchData} handleDropdown={setIsDropdown} /> : null
                }
            </form>
            {renderResultsList()}
        </div>
    )
}

export default Search
