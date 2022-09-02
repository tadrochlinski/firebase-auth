import styled from "styled-components";

const PageWrapper = styled.div`
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

export default PageWrapper