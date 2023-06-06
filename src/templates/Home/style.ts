import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivPages = styled.div`
    display: flex;
    gap: 15px;

    & p {
        border: 1px solid black;
        margin-top: 20px;
        margin-bottom: 30px;
        padding: 5px 10px;
        background-color: gray;
        color: #FFFFFF;
        cursor: pointer;
        border-radius: 5px;
    }
    & p:hover {
        color: black;
    }
`