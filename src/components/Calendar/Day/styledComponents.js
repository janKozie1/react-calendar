import styled, { css } from 'styled-components'
import { Cell } from '../styledComponents'

export let Day = styled(Cell)`
    cursor: pointer;
    font-size: 19px;
    &::after {
        position: absolute;
        font-size: 19px;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        background: transparent;
        content: '';
        display: flex;
        border: 2px solid #ccc;
        align-items: center;
        justify-content: center;
        color: black;
        /* clip-path: circle(0% at 50% 50%); */
        /* transition: clip-path 0.4s; */
        transform: scale(0);
        transition: transform 0.3s, background 0.3s, color 0.3s;
    }
    &:hover::after {
        transform: scale(1);

        /* clip-path: circle(80% at 50% 50%); */
    }
    ${({ isSelected }) =>
        isSelected &&
        css`
            &:after {
                content: ${({ day }) => "'" + day + "'"};
                border: 0;
                transform: scale(1);
                color: white;
                background: ${({ theme: { colors } }) => colors.main};
            }
        `}
    ${({ isInCurrentMonth }) =>
        !isInCurrentMonth &&
        css`
            color: #808080;
        `}
`
