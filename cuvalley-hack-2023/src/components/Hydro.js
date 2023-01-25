import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import data from '../zlewnia-stacje'
import ListHydro from './ListHydro'

const Hydro = () => {
  const { dataHydro } = useGlobalContext()
  return (
    <Wrapper>
      <div>
        {dataHydro.map((item) => {
          const { id_stacji, stacja, stan_wody } = item
          if (id_stacji === '151160060') {
            return (
              <h2 key={id_stacji}>
                Stacja: {stacja}
                <span> </span>
                Stan wody: {stan_wody}cm
              </h2>
            )
          }
        })}
      </div>
      <div className='nazwa'>
        <h2>Zlewnia - stacje</h2>
        <div>stacja</div>
        <div>stan wody [cm]</div>
      </div>

      {dataHydro.map((item) => {
        const { id_stacji, stacja, stan_wody } = item

        for (let i = 0; i < data.length; i++) {
          if (data[i].id == id_stacji) {
            // console.log(stacja, stan_wody)
            return <ListHydro key={id_stacji} {...item} />
          }
        }
      })}
    </Wrapper>
  )
}

export default Hydro

const Wrapper = styled.section`
  .nazwa {
    display: flex;
    justify-content: center;
    border: 2px solid red;
    div {
      display: flex;
      flex-direction: row;
    }
  }
`
