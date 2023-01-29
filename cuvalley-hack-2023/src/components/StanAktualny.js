import React from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'

function getCurrentDateString() {
  var currentDate = new Date()
  var options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }
  var formattedDate = currentDate.toLocaleDateString('pl-PL', options)
  return formattedDate
}

const StanAktualny = () => {
  const { dataHydro, dataHydroXLSX, stanWodyGlogow, stanWodyRaciborz } =
    useGlobalContext()
  const data = getCurrentDateString()
  return (
    <Wrapper>
      <div className='title'>Aktualne poziomy wody w rzece ({data})</div>
      <div className='underline'></div>
      <div className='stan-aktualny'>
        <div>
          Głogów:
          {stanWodyGlogow.stan_wody} cm
        </div>
        <div>
          Racibórz Miedonia:
          {stanWodyRaciborz.stan_wody} cm
        </div>
      </div>
    </Wrapper>
  )
}

export default StanAktualny

const Wrapper = styled.section`
  border: 2px #de824e solid;
  border-radius: 15px;
  padding: 15px;
  margin: 15px;
  grid-column: 1/3;
  .title {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-style: italic;
  }
  .stan-aktualny {
    display: flex;
    font-size: 2rem;
    font-weight: 700;
    justify-content: space-around;
  }
`
