import styled, { css } from 'styled-components'
import { Cell } from '../styledComponents'

export let Day = styled(Cell)`
    cursor: pointer;
    font-size: 17px;
    ${({ isInCurrentMonth }) =>
        !isInCurrentMonth &&
        css`
            color: #808080;
        `}
    &::after {
        position: absolute;
        font-size: 17px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: ${({ theme: { colors } }) => colors.main};
        content: ${({ day }) => "'" + day + "'"};
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        /* clip-path: circle(0% at 50% 50%); */
        /* transition: clip-path 0.4s; */
        transform: scale(0);
        transition: transform 0.3s;
    }
    &:hover::after {
        transform: scale(1);

        /* clip-path: circle(80% at 50% 50%); */
    }
`
