import React from 'react'
import styled from 'styled-components'
import Hydro from '../components/Hydro'
import Opad from '../components/Opad'
import StanAktualny from '../components/StanAktualny'

const Home = () => {
  return (
    <Wrapper>
      <StanAktualny />
      <Hydro />
      <Opad />
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .load-files {
    border: 2px #de824e solid;
    border-radius: 15px;
    padding: 15px;
    margin: 15px;
  }
`
