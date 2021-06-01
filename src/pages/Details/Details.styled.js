import styled from 'styled-components'

const DetailHeaderSection = styled.div`
    display: flex;
    margin: 3.6rem 0;
    align-items: start;

    h1, span, p {
        margin-left: 2.3rem;
        margin-top: 0;
    }
`

const DetailBackNav = styled.div`
    margin: 2.6rem 0;
    
    a {
        color: rgb(10,111,211);
        text-decoration: none;
        &:hover {
            color: rgba(10,111,211, 0.4);
        }
    }
`

const DetailInfoSection = styled.div`
    display: flex;
`

const DetailCastCrew = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-y: scroll;
`

const DetailsKnownFor = styled.div`
    margin: 0 1rem;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);
    padding-bottom: 3.4rem;
    height: 80%;

    div {
        padding: 0 0.4rem;
    }

`

const DetailsImage = styled.img`
    border-radius: 2%;
`


export {
    DetailHeaderSection,
    DetailBackNav,
    DetailInfoSection,
    DetailCastCrew,
    DetailsKnownFor,
    DetailsImage
}
