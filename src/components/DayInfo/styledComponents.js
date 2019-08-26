import styled, { css } from 'styled-components'

export let Container = styled.div`
    width: 545px;
    height: 709px;
    z-index: 2;
    position: relative;
    overflow: hidden;
    box-shadow: -1px 0 10px 3px #a3ffff;
    ${({ theme: { colors } }) => css`
        background: linear-gradient(to bottom, ${colors.main}, ${colors.dark});
    `}
`

export let DayInfo = styled.div`
    height: 100%;
    width: 100%;
    padding: 80px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: transform 0.4s ease-in-out;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    ${({ shown }) =>
        shown &&
        css`
            transform: translate(0%);
        `}
`

export let Header = styled.header`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`

export let Day = styled.h2`
    font-size: 90px;
    grid-row: 1/3;
`

export let DayData = styled.div`
    margin-left: 10px;
`
export let DayType = styled.h4`
    font-size: 45px;
    margin-top: 10px;
`
export let DayName = styled.h4`
    font-size: 35px;
    font-weight: normal;
    text-transform: capitalize;
    margin-top: -10px;
`
export let MonthName = styled.h2`
    width: 100%;
    font-size: 80px;
    text-transform: capitalize;
    text-align: left;
    margin-bottom: 50px;
`
