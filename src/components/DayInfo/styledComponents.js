import styled, { css } from 'styled-components'

export let DayInfo = styled.div`
    width: 545px;
    height: 709px;
    z-index: 2;
    position: relative;
    ${({ theme: { colors } }) => css`
        background: linear-gradient(to bottom, ${colors.main}, ${colors.dark});
    `}
    box-shadow:-1px 0 10px 3px #a3ffff;
`
