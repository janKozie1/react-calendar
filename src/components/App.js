import React from 'react'

import Calendar from './Calendar'
import DayInfo from './DayInfo'

import * as S from './styledComponents'

const App = () => {
  return (
    <>
      <S.Link href="https://dribbble.com/shots/6866635-Calendar-Daily-Ui-038">Inspired by Oskar Mroz</S.Link>
      <S.GlobalStyles />
      <DayInfo />
      <Calendar />
    </>
  )
}

export default App
