import React from 'react'
import styled from 'styled-components'
import Hydro from '../components/Hydro'
import Hydro2 from '../components/Hydro2'
import Opad from '../components/Opad'
import ReadHydroXLSX from '../components/ReadHydroXLSX'
import ReadMeteoXLSX from '../components/ReadMeteoXLSX'

const Home = () => {
  return (
    <Wrapper>
      <div className='load-files'>
        <ReadHydroXLSX />
        <div className='underline'></div>
        <ReadMeteoXLSX />
      </div>
      <Hydro2 />
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
