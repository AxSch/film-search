import { 
    fetchMovies,
    fetchMovieCredits,
    fetchMovieImage,
    fetchPeople,
    fetchPersonCredits,
    fetchPersonImage,
    fetchTVshows,
    fetchTVShowImage,
    fetchTVCredits
} from './api';

describe('fetchMoviesAPI', () => {
    it('should call the endpoint & successfully retrieve the movies results', () => {
        expect.assertions(1)
        return fetchMovies('Will+Smith').then(res => {
            expect(res.results.length).toEqual(5)
        })
    }, 3000);

    it('should call the endpoint & successfully retrieve the movie credit results', () => {
        expect.assertions(3)
        return fetchMovieCredits('413131').then(res => {
            expect(res.id).toEqual(413131)
            expect(res.cast.length).toEqual(2)
            expect(res.crew.length).toEqual(1)
        })
    }, 3000);

    it('should call the endpoint & successfully retrieve the movie image results', () => {
        expect.assertions(2)
        return fetchMovieImage('413131').then(res => {
            expect(res.id).toEqual(413131)
            expect(res.posters.length).toEqual(1)
        })
    }, 3000);
});


describe('fetchPeopleAPI', () => {
    it('should call the endpoint & successfully retrieve the people results', () => {
        expect.assertions(2)
        return fetchPeople('Will+Smith').then(res => {
            expect(res.results[0].adult).toEqual(false)
            expect(res.results.length).toEqual(20)
        })
    }, 3000);

    it('should call the endpoint & successfully retrieve the person credits results', () => {
        expect.assertions(3)
        return fetchPersonCredits('2888').then(res => {
            expect(res.id).toEqual(2888)
            expect(res.cast.length).toEqual(121)
            expect(res.crew.length).toEqual(40)
        })
    }, 3000);

    it('should call the endpoint & successfully retrieve the person image results', () => {
        expect.assertions(2)
        return fetchPersonImage('2888').then(res => {
            expect(res.id).toEqual(2888)
            expect(res.profiles.length).toEqual(22)
        })
    }, 3000);
});


describe('fetchTVshowsAPI', () => {
    it('should call the endpoint & successfully retrieve the TV show results', () => {
        expect.assertions(1)
        return fetchTVshows('Will+Smith').then(res => {
            expect(res.results.length).toEqual(2)
        })
    }, 3000);

    it('should call the endpoint & successfully retrieve the TV show credits results', () => {
        expect.assertions(2)
        return fetchTVCredits('87732').then(res => {
            expect(res.id).toEqual(87732)
            expect(res.cast.length).toEqual(1)
        })
    }, 3000);

    it('should call the endpoint & successfully retrieve the tv show image results', () => {
        expect.assertions(2)
        return fetchTVShowImage('87732').then(res => {
            expect(res.id).toEqual(87732)
            expect(res.posters.length).toEqual(1)
        })
    }, 3000);
});