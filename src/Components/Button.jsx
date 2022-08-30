import styled from "styled-components";

const Button = styled.button`
    border-radius: 5px;
    border: 0;
    padding: 5px;
    background: #0088ff;
    color: #fff;
    font-weight: 500;
    transition: 200ms color, 200ms background;

    &:hover{
        cursor: pointer;
        background: #fff;
        color: #0088ff;
    }

    &:focus{
        outline: 0;
        background: #fff;
        color: #0088ff;
    }
`

export default Button;