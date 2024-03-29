import styled from 'styled-components'

const Dropdown = styled.ul`
    color: white;
    margin: ${props => (props.isDropdown ? `0` : '1.2rem 0')};
    list-style-type: none;
    padding-left: 0;
    border-radius: ${props => (props.isDropdown ? `0 0 4px 4px` : '4px')};
    padding: ${props => (props.isDropdown ? `1.2rem` : '0.9rem')};
    background-color: rgb(60,60,60);
    box-shadow: ${props => (props.isDropdown ? `0px 0px 0px 1px rgba(0, 0, 0, 0.2)` : '')};
`

const Suggestions = styled.div`
    margin-bottom: 1.2rem;
    font-weight: 500;
`

const ResultsSection = styled.div`
    display: flex;
    margin: 1.1rem 0;
    padding: 1.1rem 0;
    border-bottom: ${props => (!props.isPeople ? `1px solid rgba(0, 0, 0, 0.2)` : '')};
`

const ResultsHeading = styled.div`
    width: 30%;
`

export {
    Dropdown,
    Suggestions,
    ResultsSection,
    ResultsHeading
}
