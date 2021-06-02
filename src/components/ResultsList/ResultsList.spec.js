import React from 'react'
import { renderConnected } from '../../utils/testHelpers';
import ResultsList from './ResultsList'

const initialState = {
    results: {},
    currentItem: {}
}

const mockResults = {
    movies: [
        {
            adult: false,
            backdrop_path: null,
            genre_ids: [10402],
            id: 413131,
            original_language: "en",
            original_title: "Will Smith: Live in Concert",
            overview: "Will Smith performs live in concert some of his old and new hits.",
            popularity: 2.173,
            poster_path: "/3jfOK5O8HEa6F8cRLVmLTm0YlE8.jpg",
            release_date: "",
            title: "Will Smith: Live in Concert",
            video: false,
            vote_average: 6.4,
            vote_count: 7,
        },
        {
            adult: false,
            backdrop_path: null,
            genre_ids: [10402],
            id: 413131,
            original_language: "en",
            original_title: "Will Smith - Goes to New York",
            overview: "Will Smith goes to the big apple.",
            popularity: 0.9,
            poster_path: "/3jfOK5O8HEa6F8cRLVmLTm0YlE8.jpg",
            release_date: "",
            title: "Will Smith - Goes to New York",
            video: false,
            vote_average: 2.2,
            vote_count: 10,
        },
    ],
    tvShows: [
        {
            backdrop_path: "/mygD13dQe2sTQ7EMEx065DB1qmD.jpg",
            first_air_date: "2019-02-27",
            genre_ids: (2) [10764, 99],
            id: 87732,
            name: "Will Smith's Bucket List",
            origin_country: ["US"],
            original_language: "en",
            original_name: "Will Smith's Bucket List",
            overview: "There aren’t many people in the world who have a bucket list quite like Will Smith. Now you can join him on his unbelievable adventure as he travels the globe, takes on insane challenges, overcomes obstacles and punches fear in the mouth!",
            popularity: 4.79,
            poster_path: "/8FAd59PHpLzIjMQDk3AIrmEQB0K.jpg",
            vote_average: 6,
            vote_count: 4
        }
    ],
    people: [
        {
            adult: false,
            gender: 2,
            id: 2888,
            known_for: [{}, {}, {}],
            known_for_department: "Acting",
            name: "Will Smith",
            popularity: 17.466,
            profile_path: "/eze9FO9VuryXLP0aF2cRqPCcibN.jpg"
        }
    ]
}


describe('ResultsList', () => {
    let container, getByTestId, queryByTestId
    
    beforeEach(() => {
        
    })

    it('should render successfully', () => {
        const utils = renderConnected(<ResultsList results={mockResults} handleDropdown={() => {}}  filter='all' isDropdown={false} />, { initialState });
        container = utils.container;
        getByTestId = utils.getByTestId;
        expect(getByTestId("resultsList")).toBeInTheDocument();
        expect(getByTestId("results")).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should render all results - filter set to all', () => {
        const utils = renderConnected(<ResultsList results={mockResults} handleDropdown={() => {}}  filter='all' isDropdown={false} />, { initialState });
        container = utils.container;
        getByTestId = utils.getByTestId;

        expect(getByTestId("resultsList")).toBeInTheDocument();
        expect(getByTestId("peopleSection")).toBeInTheDocument();
        expect(getByTestId("tvshowsSection")).toBeInTheDocument();
        expect(getByTestId("moviesSection")).toBeInTheDocument();
    })

    it('should render all results - filter set to people', () => {
        const utils = renderConnected(<ResultsList results={mockResults} handleDropdown={() => {}}  filter='people' isDropdown={false} />, { initialState });
        queryByTestId = utils.queryByTestId;

        expect(queryByTestId("peopleSection")).toBeInTheDocument();
        expect(queryByTestId("tvshowsSection")).not.toBeInTheDocument();
        expect(queryByTestId("moviesSection")).not.toBeInTheDocument();
    })

    it('should render all results - filter set to movies', () => {
        const utils = renderConnected(<ResultsList results={mockResults} handleDropdown={() => {}}  filter='movies' isDropdown={false} />, { initialState });
        queryByTestId = utils.queryByTestId;

        expect(queryByTestId("moviesSection")).toBeInTheDocument();
        expect(queryByTestId("peopleSection")).not.toBeInTheDocument();
        expect(queryByTestId("tvshowsSection")).not.toBeInTheDocument();
    })

    it('should render all results - filter set to tvShows', () => {
        const utils = renderConnected(<ResultsList results={mockResults} handleDropdown={() => {}}  filter='tvShows' isDropdown={false} />, { initialState });
        queryByTestId = utils.queryByTestId;

        expect(queryByTestId("tvshowsSection")).toBeInTheDocument();
        expect(queryByTestId("moviesSection")).not.toBeInTheDocument();
        expect(queryByTestId("peopleSection")).not.toBeInTheDocument();
    })

    it('should render suggestions', () => {
        const utils = renderConnected(<ResultsList results={mockResults} handleDropdown={() => {}}  filter='all' isDropdown={true} />, { initialState });
        getByTestId = utils.getByTestId;

        expect(getByTestId("suggestions")).toBeInTheDocument();
        expect(queryByTestId("tvshowsSection")).toBeInTheDocument();
        expect(queryByTestId("moviesSection")).toBeInTheDocument();
        expect(queryByTestId("peopleSection")).toBeInTheDocument();
    })

})