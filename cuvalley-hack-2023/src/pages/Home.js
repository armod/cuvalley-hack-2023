import React from 'react'
import styled from 'styled-components'
import Hydro from '../components/Hydro'
import ListHydro from '../components/ListHydro'
import Opad from '../components/Opad'

const Home = () => {
  return (
    <Wrapper>
      <Hydro>
        <ListHydro />
      </Hydro>
      <Opad />
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`
