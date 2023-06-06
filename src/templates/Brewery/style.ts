import styled from "styled-components";

export const BreweryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & .link {
        width: 75%;
        text-decoration:none;
        color: #000000;
        margin-bottom: 15px;
    }
    `

export const InfoBrewery = styled.div`
    width: 75%;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

    & h3 {
        font-size: 27px;
        margin-bottom: 15px;
    }
`