import styled, { css } from 'styled-components'
import { ReactComponent as trash } from '../../../assets/icons/trash.svg'
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
    justify-content: space-between;
    color: white;
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
export let Header = styled.h3`
    font-size: 40px;
    color: white;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export let Delete = styled(trash)`
    height: 30px;
    width: 30px;
    cursor: pointer;
    > path {
        fill: white;
    }
`

export let Form = styled.form`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 2em;
    grid-auto-rows: max-content;
    grid-row-gap: 1em;
    align-items: center;
    flex: 1;
    margin-left: 0px;
`
export let Title = styled.label`
    font-size: 20px;
`

export let Input = styled.input`
    border: 0;
    width: 200px;
    padding: 8px 20px;
    background: transparent;
    font-family: inherit;
    border: 2px solid white;
    color: white;
    font-size: 15px;
`

export let Date = styled(Title)``

export let Time = styled(Title)``
