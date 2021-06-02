import React from 'react'
import { renderWithRouter } from '../../utils/testHelpers';
import Result from './Result'

describe('Result', () => {
    let container, getByTestId, initialProps
    beforeEach(() => {
        initialProps = {
            category: 'tvShows',
            resultData: {
                adult: false,
                gender: 0,
                id: 2400560,
                known_for: [{}],
                known_for_department: "Acting",
                name: "Willie Smith",
                popularity: 0.6,
                profile_path: null
            }
        }
        const utils = renderWithRouter(<Result resultData={initialProps.resultData} category={initialProps.category} />);
        container = utils.container;
        getByTestId = utils.getByTestId;
    })

    it('should render successfully', () => {
        expect(getByTestId("resultItem")).toBeInTheDocument();
        expect(getByTestId("resultName")).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should render movies result', () => {
        initialProps.category = "movies" 
        initialProps.resultData = {
            title: 'Monsoon Lagoon',
            id: 2400
        }
        const utils = renderWithRouter(<Result resultData={initialProps.resultData} category={initialProps.category} />);
        container = utils.container;
        getByTestId = utils.getByTestId;
        expect(getByTestId("resultItemMovies")).toBeInTheDocument();
    })

})