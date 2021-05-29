const API_KEY = process.env.API_KEY

const fetchMovies = async (query) => {
    try {
        const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&query=${query}`)
        const data = await movies.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchTVshows = async (query) => {
    try {
        const tvShows = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&include_adult=false&query=${query}`)
        const data = await tvShows.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const fetchPeople = async (query) => {
    try {
        const people = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&include_adult=false&query=${query}`)
        const data = await people.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export { fetchMovies,  fetchPeople, fetchTVshows }
