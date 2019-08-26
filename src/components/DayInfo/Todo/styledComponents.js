import styled from 'styled-components'

export let Container = styled.div`
    width: 100%;
`

export let Title = styled.h4`
    font-size: 20px;
    letter-spacing: 2px;
    padding-bottom: 20px;
    position: relative;
    &::after {
        content: '';
        background: white;
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
    }
`
