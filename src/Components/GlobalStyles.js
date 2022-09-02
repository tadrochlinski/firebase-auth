import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Mukta', sans-serif;

        body{
            width: 100%;
            min-height: 100vh;
        }
    }
`