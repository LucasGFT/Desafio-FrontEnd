import styled from "styled-components";

export const Label = styled.label`
    width: 68%;
    margin: 15px 0;
    font-size: 20px;

    @media (min-width: 501px) and (max-width: 700px) {
        width: 100%;
        margin-left: 25px;
    }
    @media (min-width: 701px) and (max-width: 1000px) {
        width: 100%;
        margin-left: 70px;
    }

    @media (max-width: 500px) {
        width: 100%;
        margin-left: 25px;
    }

    & select {
        margin-left: 10px;
    }
`