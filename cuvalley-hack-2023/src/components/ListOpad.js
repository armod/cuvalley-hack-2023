import React from 'react'
import styled from 'styled-components/macro'

const ListHydro = ({ name, precip_mm }) => {
  return (
    <Wrapper>
      <div className='row'>
        <div className='col1'>{name}</div>
        <div className='col2'>{precip_mm} mm</div>
      </div>
    </Wrapper>
  )
}

export default ListHydro

const Wrapper = styled.article`
  .row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-rows: minmax(30px, auto); */
    border: 1px solid black;
    .col1,
    .col2 {
      border: 1px solid black;
      font-size: 1.2rem;
    }
  }
`
