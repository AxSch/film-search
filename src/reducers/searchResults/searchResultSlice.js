import { createSlice } from '@reduxjs/toolkit';

const searchResultSlice = createSlice({
    name: 'searchResults',
    initialState: {
        results: {},
    },
    reducers: {
        storeResults: (state, action) => {
            const peopleObj = {}
            const movieObj = {}
            const tvShowObj = {}

            if (action.payload) {
                if(action.payload['people'] && Object.keys(action.payload['people']).length > 0) {
                    action.payload['people'].forEach(person => {
                        peopleObj[person.id] = person
                    })
                }
                if(action.payload['movies'] && Object.keys(action.payload['movies']).length > 0) {
                    action.payload['movies'].forEach(movie => {
                        movieObj[movie.id] = movie
                    })
                }
                if(action.payload['tvShows'] && Object.keys(action.payload['tvShows']).length > 0) {
                    action.payload['tvShows'].forEach(tvShow => {
                        tvShowObj[tvShow.id] = tvShow
                    })
                }
            }
            state.results = {
                people: peopleObj,
                tvShows: tvShowObj,
                movies: movieObj,
            }
        }
    }
})

export const selectResults = state => state.searchResults.results

export const { storeResults } = searchResultSlice.actions

export default searchResultSlice.reducer