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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    ${({ shown }) =>
        shown &&
        css`
            transform: translate(0);
            pointer-events: all;
        `}
`

export let Actions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    outline: none;
    cursor: pointer;
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
        font-weight:bolder;
    `}
`
export let Title = styled.label`
    font-size: 40px;
    color: white;
    display: flex;
    flex-direction: column;

    span {
        margin-bottom: 20px;
    }
`

export let Input = styled.input`
    border: 0;
    width: 50%;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.6);
    font-family: inherit;
    border: 2px solid white;
    color: white;
    margin-left: 20px;
`
