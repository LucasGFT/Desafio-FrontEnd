import styled, { css } from "styled-components";

export const Lista = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
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