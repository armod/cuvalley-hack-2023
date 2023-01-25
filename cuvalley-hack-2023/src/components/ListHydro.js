import React from 'react'
import styled from 'styled-components'

const ListHydro = ({ id_stacji, stacja, stan_wody }) => {
  return (
    <Wrapper>
      <div className='nazwa'>{stacja}</div>
    </Wrapper>
  )
}

export default ListHydro

const Wrapper = styled.article`
  display: flex;
`
