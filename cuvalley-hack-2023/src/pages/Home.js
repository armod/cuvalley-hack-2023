import React from 'react'
import styled from 'styled-components'
import Hydro from '../components/Hydro'
import Opad from '../components/Opad'
import ReadHydroXLSX from '../components/ReadHydroXLSX'

const Home = () => {
  return (
    <Wrapper>
      <ReadHydroXLSX />
      <Hydro />
      <Opad />
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
