import React from 'react'
import styled from 'styled-components/macro'
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
                Stacja: {stacja} {/* dla Głogowa */}
                <span> </span>- stan wody: {stan_wody}cm
              </h2>
            )
          }
        })}
      </div>
      <div className='nazwa'>
        <h2>Zlewnia - stacje hydrologiczne</h2>
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
  }
`
