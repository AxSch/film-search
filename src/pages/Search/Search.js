import React, { useEffect, useState } from 'react';
import { fetchMovies, fetchTVshows, fetchPeople } from '../../api/api'
import ResultsList from '../../components/ResultsList/ResultsList';

const Search = () => {
    const [searchData, setSearchData] = useState([])
    const [isDropdown, setIsDropdown] = useState(false)
    
    const handleSearch = async (value) => {
        if (value.length >= 5) {
            const peopleResults = await fetchPeople(value)
            const tvShowResults = await fetchTVshows(value)
            const movieResults = await fetchMovies(value)
            setSearchData({people: peopleResults.results, tvShows: tvShowResults.results, movies: movieResults.results})
            setIsDropdown(true)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsDropdown(false)
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="search">Search</label>
                <input type="search" id="search" onChange={e => handleSearch(e.target.value)} />
                <input type="submit" value="Submit" />
                {isDropdown ? 
                    <ResultsList results={searchData}/> : null
                }
            </form>
        </div>
    )
}

export default Search
