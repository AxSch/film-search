import { createSlice } from '@reduxjs/toolkit';

const mapStateObj = (action) => {
    const peopleObj = {}
    const movieObj = {}
    const tvShowObj = {}

    if (action.payload) {
        if (action.payload['people'] && Object.keys(action.payload['people']).length > 0) {
            action.payload['people'].forEach(person => {
                peopleObj[person.id] = person
            })
        }
        if (action.payload['movies'] && Object.keys(action.payload['movies']).length > 0) {
            action.payload['movies'].forEach(movie => {
                movieObj[movie.id] = movie
            })
        }
        if (action.payload['tvShows'] && Object.keys(action.payload['tvShows']).length > 0) {
            action.payload['tvShows'].forEach(tvShow => {
                tvShowObj[tvShow.id] = tvShow
            })
        }
    }
    return {peopleObj, movieObj, tvShowObj}
}

const searchResultSlice = createSlice({
    name: 'searchResults',
    initialState: {
        results: {},
        currentItem: {}
    },
    reducers: {
        storeResults: (state, action) => {
            const { peopleObj, tvShowObj, movieObj } = mapStateObj(action)
            state.results = {
                people: peopleObj,
                tvShows: tvShowObj,
                movies: movieObj,
            }
        },
        setCurrentItem: (state, action) =>  {
            state.currentItem = action.payload
        }
    }
})

export const selectCurrentItem = (state) => state.searchResults.currentItem

export const { storeResults, setCurrentItem } = searchResultSlice.actions

export default searchResultSlice.reducer