import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html{
        @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
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
            background: ${colors.background};
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
        @media screen and (max-width:960px) {
            flex-direction:column-reverse;
            height:auto;
        }
    }
`

export let Link = styled.a`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translate(-50%);
    color: #666;
`
