import styled, { css } from 'styled-components'

export let Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 80px;
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0%;
    transform: translateX(100%);
    pointer-events: none;
    transition: transform 0.4s ease-in-out;
    ${({ shown }) =>
        shown &&
        css`
            transform: translate(0);
        `}
`

export let Button = styled.button`
    background: transparent;
    border: 2px solid white;
    padding: 10px 0;
    width: 80px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    ${({
        theme: {
            colors: { main }
        },
        primary
    }) =>
        primary &&
        css`
        color:${main}
        background:white;
    `}
`
