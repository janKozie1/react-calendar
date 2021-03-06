import styled from 'styled-components'
import { ReactComponent as add } from '../../../assets/icons/add.svg'
import { ReactComponent as arrow } from '../../../assets/icons/thin_arrow.svg'
export let Container = styled.div`
    width: 100%;
    height: 300px;
`

export let Title = styled.h4`
    font-size: 20px;
    letter-spacing: 2px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &::after {
        content: '';
        background: rgba(255, 255, 255, 0.5);
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
    }
`

export let Icon = styled(add)`
    height: 27px;
    width: 27px;
    cursor: pointer;

    > path {
        fill: white;
    }
`

export let EventList = styled.ul`
    width: 100%;
    list-style-type: none;
    height: 252px;
    overflow: auto;
    overflow-x: hidden;
    position: relative;
    &::-webkit-scrollbar {
        width: 6px;
        position: absolute;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        right: 0;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        width: 6px;
        background: rgba(255, 255, 255, 0.8);
    }
`

export let Event = styled.li`
    display: flex;
    height: 33.33%;
    cursor: pointer;
    align-items: center;
    transition: background 0.2s ease;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
        svg {
            opacity: 1;
            transform: translateX(0px);
        }
    }
`
export let Completed = styled.div`
    height: 10px;
    width: 10px;
    background: white;
    margin: 30px;
    margin-left: 0;
    border-radius: 50%;
`
export let EventDesc = styled.div`
    display: flex;
    flex-direction: column;
`
export let EventTitle = styled.p`
    margin: 0%;
    font-weight: normal;
    font-size: 20px;
`
export let EventDate = styled.p`
    color: rgba(255, 255, 255, 0.6);
    > span {
        text-transform: capitalize;
    }
`

export let IconContainer = styled.div`
    margin-left: auto;
    margin-right: 0;
    margin-right: 20px;
`
export let Continue = styled(arrow)`
    width: 30px;
    height: 30px;
    opacity: 0;
    padding: 5px;
    border-radius: 50%;
    transition: opacity 0.2s ease-in-out;
    > path {
        fill: white;
    }
`
