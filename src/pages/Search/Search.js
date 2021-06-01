import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchTVshows, fetchPeople } from '../../api/api'
import ResultsList from '../../components/ResultsList/ResultsList';
import { storeResults } from '../../reducers/searchResults/searchResultSlice';
import { 
        SearchHeader, 
        Container, 
        SearchBarSection, 
        SearchBarInput, 
        SearchFilterSection, 
        SearchBarButton,
        SearchFilterLabel,
        SearchFilterHeading,
        ResultsListSection,
        SearchForm
} from './Search.styled';


const Search = () => {
    const [searchData, setSearchData] = useState({})
    const [isDropdown, setIsDropdown] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState('all')
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

    const handleCheckbox = (value) => {
        setFilter(value)
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
            if (filter !== '') {
                return (
                    <ResultsListSection>
                        <ResultsList results={searchData} handleDropdown={setIsDropdown} filter={filter} isDropdown={isDropdown} />
                    </ResultsListSection>
                )
            }
        } else if (searchQuery === '') {
            return null
        }
    }

    return (
        <Container>
            <SearchHeader>
                <h1>Search for an Actor, TV show & Movie</h1>
            </SearchHeader>
            <SearchForm onSubmit={(e) => onSubmit(e)} isDropdown={isDropdown}>
                <SearchBarSection>
                    <SearchBarInput placeholder="Search" type="search" id="search" onChange={e => handleSearch(e.target.value)} />
                    <SearchBarButton type="submit">Submit</SearchBarButton>
                </SearchBarSection>
                <SearchFilterHeading>
                    <span>Filter by</span>
                </SearchFilterHeading>
                <SearchFilterSection>
                    <input type="radio" id="movies" onChange={(event) => handleCheckbox(event.target.value)} name="cinematography" value="movies"></input>
                    <SearchFilterLabel htmlFor="movies">Movies</SearchFilterLabel><br></br>
                    <input type="radio" id="tvShows" onChange={(event) => handleCheckbox(event.target.value)} name="cinematography" value="tvShows"></input>
                    <SearchFilterLabel htmlFor="tvShows">TV Shows</SearchFilterLabel><br></br>
                    <input type="radio" id="people" onChange={(event) => handleCheckbox(event.target.value)} name="cinematography" value="people"></input>
                    <SearchFilterLabel htmlFor="people">People</SearchFilterLabel><br></br>
                    <input type="radio" id="all" onChange={(event) => handleCheckbox(event.target.value)} name="cinematography" value="all"></input>
                    <SearchFilterLabel htmlFor="all">All</SearchFilterLabel><br></br>
                </SearchFilterSection>
            </SearchForm>
            {isDropdown && Object.keys(searchData).length > 0 && searchQuery !== '' ?
                <ResultsList results={searchData} handleDropdown={setIsDropdown} filter={filter} isDropdown={isDropdown} /> : null
            }
            {renderResultsList()}
        </Container>
    )
}

export default Search
