import styled from 'styled-components'

const Container = styled.div`
    margin: 0 2.4rem;

`

const SearchHeader = styled.div`
    display: flex;
    justify-content: center;
`

const SearchLabel = styled.label`
    margin-right: 1rem;
`

const SearchBarInput = styled.input`
    padding: 0.4rem;
    width: 80%;
    margin-right: 1rem;
`

const SearchBarSection = styled.div`
    display: flex;
    align-items: center;
    margin: 1.4rem 0;
`

const SearchBarButton = styled.button`
    padding: 0.4rem;
    width: 20%;
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

export {
    SearchHeader,
    Container,
    SearchLabel,
    SearchBarSection,
    SearchBarInput,
    SearchFilterSection,
    SearchBarButton,
    SearchFilterLabel,
    SearchFilterHeading,
    ResultsListSection
}
