import styled from 'styled-components'

const DetailHeaderSection = styled.div`
    background-color: rgb(60,60,60);
    color: white;
    display: flex;
    margin: 3.6rem 0;
    padding: 1.3rem;
    align-items: start;
    flex-wrap: wrap;
    border-radius: 4px;
    
    @media(min-width: 1024px) {
        flex-wrap: nowrap;
        align-items: center;
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

const DetailsOverviewSection = styled.div`
    margin-top: 1.2rem;
    padding: 1.3rem;

    h1 {
        text-align: center;
    }

    @media(min-width: 1024px) {
        display: flex;
        align-self: start;
        flex-wrap: wrap;
        margin-top: 0;
        align-items: center;

        h1 {
            margin-right: 1.2rem;
        }
    }
`

const DetailsImageSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media(min-width: 1024px) {
        width: 40%;
        align-items: center;
    }
`


export {
    DetailHeaderSection,
    DetailBackNav,
    DetailInfoSection,
    DetailCastCrew,
    DetailsKnownFor,
    DetailsImage,
    DetailsImageSection,
    DetailsOverviewSection
}
