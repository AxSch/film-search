import styled from 'styled-components'

const ResultItem = styled.li`
    margin-bottom: 0.5rem;

    a {
        color: rgb(10,111,211);
        text-decoration: none;
        &:hover {
            color: rgba(10,111,211, 0.4);
        }
    }
`

const ResultName = styled.span`
    margin-right: 0.4rem;
`

export {
    ResultItem,
    ResultName
}
