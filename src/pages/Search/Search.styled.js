import styled from 'styled-components'

const Container = styled.div`
    margin: 0 2.4rem;
`

const SearchHeader = styled.div`
    display: flex;
    justify-content: center;
`

const SearchBarInput = styled.input`
    padding: 0.6rem;
    width: 80%;
    margin-right: 1rem;

    @media(min-width: 1024px) {
        width: 60%;
    }
`

const SearchBarSection = styled.div`
    display: flex;
    align-items: center;
    margin: 1.4rem 0;
`

const SearchBarButton = styled.button`
    padding: 0.6rem;
    width: 20%;

    @media(min-width: 1024px) {
        width: 10%;
    }
`

const SearchFilterSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const SearchFilterLabel= styled.label`
    margin-right: 0.6rem;
    padding-left: 0.2rem;
`

const SearchFilterHeading = styled.div`
    display: flex;
    width: 20%;
    font-weight: 500;
    margin-bottom: 0.8rem;
`

const ResultsListSection = styled.div`
    margin-top: 3.2rem;
`

const SearchForm = styled.form`
    background-color: rgb(60,60,60);
    color: white;
    padding: 1.2rem;
    border-radius: ${props => (props.isDropdown ? `4px 4px 0 0` : '4px')};
`

export {
    SearchHeader,
    Container,
    SearchForm,
    SearchBarSection,
    SearchBarInput,
    SearchFilterSection,
    SearchBarButton,
    SearchFilterLabel,
    SearchFilterHeading,
    ResultsListSection
}
