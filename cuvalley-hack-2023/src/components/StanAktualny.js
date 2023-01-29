import React from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'

const StanAktualny = () => {
  const { dataHydro, dataHydroXLSX, stanWodyGlogow, stanWodyRaciborz } =
    useGlobalContext()
  return (
    <Wrapper>
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
  .stan-aktualny {
    display: flex;
    font-size: 2rem;
    font-weight: 700;
    justify-content: space-around;
  }
`
