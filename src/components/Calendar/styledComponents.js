import styled, { css } from 'styled-components'
import { ReactComponent as bg } from '../../assets/icons/arrow.svg'

export const Calendar = styled.div`
    width: 652px;
    height: 624px;
    background: white;
    box-shadow: 0 0 15px 5px #dcf4f0;
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`
export const Days = styled.div`
    display: grid;

    grid-template-columns: repeat(7, 55px);
    grid-auto-rows: 52px;
    gap: 15px 15px;
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(7, 12vw);
        grid-auto-rows: 12vw;
        gap: 5px;
    }
`

export const Cell = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const DayName = styled(Cell)`
    text-transform: capitalize;
    font-weight: bolder;
    font-size: 20px;
`

export let Header = styled.header`
    width: 455px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    @media screen and (max-width: 500px) {
        width: 84vw;
        grid-auto-rows: 12vw;
        gap: 5px;
    }
`

export let Month = styled.div`
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 23px;
    text-transform: capitalize;
    color: #737373;
`

export let Year = styled.div`
    color: #ddd;
    font-size: 50px;
    user-select: none;
`

export let Button = styled.button`
    font-size: 23px;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    user-select: none;

    cursor: pointer;
    ${({ mirrored }) =>
        mirrored &&
        css`
            transform: rotate(180deg);
        `}
`

export let Icon = styled(bg)`
    width: 30px;
    height: 30px;
    border: 0;
    > path {
        fill: #737373;
    }
`
