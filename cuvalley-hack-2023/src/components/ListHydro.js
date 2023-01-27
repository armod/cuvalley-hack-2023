import React from 'react'
import styled from 'styled-components/macro'

const ListHydro = ({ id_stacji, stacja, stan_wody }) => {
  return (
    <Wrapper>
      <div className='row'>
        <div className='col1'>
          ({id_stacji}) {stacja}
        </div>
        <div className='col2'>{stan_wody}cm</div>
      </div>
    </Wrapper>
  )
}

export default ListHydro

const Wrapper = styled.article`
  .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-auto-rows: minmax(30px, auto); */
    /* border: 1px solid black; */
    .col1,
    .col2 {
      border: 1px solid black;
      /* font-size: 1.2rem; */
    }
  }
`
