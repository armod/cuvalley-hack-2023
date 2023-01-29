import React from 'react'
import styled from 'styled-components/macro'

const ListHydro = ({ name, precip_mm }) => {
  return (
    <Wrapper>
      <div className='filtered'>
        <div className='col1'>{name}</div>
        <div className='col2'>{precip_mm} mm</div>
      </div>
    </Wrapper>
  )
}

export default ListHydro

const Wrapper = styled.article`
  .filtered {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: #de824e 2px dotted;
    margin-bottom: 3px;
    span {
      margin-top: 10px;
      font-size: 1rem;
    }
  }
  .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-auto-rows: minmax(30px, auto); */
    /* border: 1px solid black; */

    .col1,
    .col2 {
      border: 1px solid black;
    }
  }
`
