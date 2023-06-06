import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;

    & div {
        width: 95%;
        justify-content: center;
        color: #FFFFFF;
        background: linear-gradient(to right, #353535, gray);;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & div h3, p {
        width: 73%;
    }
`