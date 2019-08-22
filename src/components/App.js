import React from 'react'

import { useStateValue } from '../store'

import Calendar from './Calendar'

import * as S from './styledComponents'

const App = () => {
    const [state, dispatch] = useStateValue()
    console.log(state)
    return (
        <>
            <S.GlobalStyles />
            <Calendar />
        </>
    )
}

export default App
