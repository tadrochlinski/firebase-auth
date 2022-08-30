import styled from "styled-components";

const RegisterWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;

    h1{
        font-size: 3rem;
        color: #0088ff;
        text-align: center;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 300px;
        border: 2px solid #e9e9e9;
        border-radius: 5px;
        padding: 20px;

        div{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        input{
            width: 100%;
            margin-bottom: 10px;
            border: 2px solid #e9e9e9;
            border-radius: 5px;
            padding: 5px;
            transition: 200ms border, 200ms transform;

            &:hover{
                outline: 0;
                border: 2px solid #0088ff;
            }

            &:focus{
                outline: 0;
                border: 2px solid #0088ff;
                transform: scale(1.05);
            }
        }

        button{
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
        }

        a{
            color: #0088ff;
            text-decoration: none;
            transition: 200ms transform;

            &:hover{
                transform: scale(1.05);
            }

            &:focus{
                transform: scale(1.05);
                outline: 0;
            }
        }
    }
`

export default RegisterWrapper