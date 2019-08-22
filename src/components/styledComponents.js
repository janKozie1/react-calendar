import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html{
        height:100%;
        width:100%;
        ${({ theme: { fonts, colors } }) =>
            css`
                font-family: ${fonts.main};
                color: ${colors.font};
            `}
    }
    body{
        height:100%;
        width:100%;
        margin:0;
        padding:0;
        box-sizing:border-box;
        ${({ theme: { colors } }) => css`
            background: linear-gradient(
                to bottom right,
                ${colors.light},
                ${colors.dark}
            );
        `}
        *{
            &,&::after,&::before{
                box-sizing:border-box;
                margin:0;
                padding:0;
            }
        }
    }
    #root{
        height:100%;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`
