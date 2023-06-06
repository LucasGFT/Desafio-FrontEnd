import styled from "styled-components";

export const Lista = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (min-width: 501px) and (max-width: 700px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 701px) and (max-width: 1000px) {
        margin-left: 20px;
        margin-right: 20px;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    & a {
        text-decoration: none;
        color: black;
    }
`

export const Elemento = styled.div`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    height: 180px;
    width: 200px;
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 501px) and (max-width: 700px) {
        margin: 5px 10px;
        width: auto;
        height: 220px;
    }

    @media (min-width: 701px) and (max-width: 1000px) {
        margin: 5px 10px;
        width: auto;
        height: 220px;
    }

    @media (max-width: 500px) {
        margin: 5px 10px;
        width: auto;
        height: 220px;
    }

    & h3 {
        margin: 15px;
    }

    & p {
        margin: 3px;
        margin-left: 15px;
    }
`

export const Type = styled.span`
    width: auto;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    margin-left: 15px;
`;