

const fetchMovies = async (query) => {
    try {
        const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=76e77a494aebd05ce5c4f5000c61cc0e&include_adult=false&query=${query}`)
        const data = await movies.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchTVshows = async (query) => {
    try {
        const tvShows = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=76e77a494aebd05ce5c4f5000c61cc0e&include_adult=false&query=${query}`)
        const data = await tvShows.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchPeople = async (query) => {
    try {
        const people = await fetch(`https://api.themoviedb.org/3/search/person?api_key=76e77a494aebd05ce5c4f5000c61cc0e&include_adult=false&query=${query}`)
        const data = await people.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchTVCredits = async (query) => {
    try {
        const tvCredits = await fetch(`https://api.themoviedb.org/3/tv/${query}/credits?api_key=76e77a494aebd05ce5c4f5000c61cc0e`)
        const data = await tvCredits.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchMovieCredits = async (query) => {
    try {
        const movieCredits = await fetch(`https://api.themoviedb.org/3/movie/${query}/credits?api_key=76e77a494aebd05ce5c4f5000c61cc0e`)
        const data = await movieCredits.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchPersonCredits = async (query) => {
    try {
        const movieCredits = await fetch(`https://api.themoviedb.org/3/person/${query}/combined_credits?api_key=76e77a494aebd05ce5c4f5000c61cc0e`)
        const data = await movieCredits.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchPersonImage = async (query) => {
    try {
        const personImage = await fetch(`https://api.themoviedb.org/3/person/${query}/images?api_key=76e77a494aebd05ce5c4f5000c61cc0e`)
        const data = await personImage.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchTVShowImage = async (query) => {
    try {
        const tvShowImage = await fetch(`https://api.themoviedb.org/3/tv/${query}/images?api_key=76e77a494aebd05ce5c4f5000c61cc0e`)
        const data = await tvShowImage.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchMovieImage = async (query) => {
    try {
        const movieImage = await fetch(`https://api.themoviedb.org/3/movie/${query}/images?api_key=76e77a494aebd05ce5c4f5000c61cc0e`)
        const data = await movieImage.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const configureAPI = async (query) => {
    try {
        const config = await fetch(`https://api.themoviedb.org/3/configuration?api_key=76e77a494aebd05ce5c4f5000c61cc0e`)
        const data = await config.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export { 
        fetchMovies,
        fetchPeople,
        fetchTVshows, 
        fetchTVCredits, 
        fetchMovieCredits, 
        fetchPersonCredits, 
        fetchPersonImage, 
        fetchTVShowImage, 
        fetchMovieImage, 
        configureAPI
     }
