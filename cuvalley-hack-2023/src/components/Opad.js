import React from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'
import data from '../zlewnia-stacje-meteo_'
import ListOpad from '../components/ListOpad'

const Opad = () => {
  const { dataOpad } = useGlobalContext()
  return (
    <Wrapper>
      <div>
        {dataOpad.map((item, index) => {
          const { name } = item.location
          if (name === 'GLOGOW') {
            return (
              <h2 key={index}>
                Stacja: {name} {/* dla Głogowa */}
                {/* <span> </span> */}
                {/* Suma opadów: {stan_wody}cm */}
              </h2>
            )
          }
        })}
      </div>

      <div className='nazwa'>
        <h2>Zlewnia - stacje meteorologiczne</h2>
      </div>

      {dataOpad.map((item, index) => {
        const { name } = item.location
        const { precip_mm } = item.current

        // console.log(stacja, stan_wody)
        return <ListOpad key={index} name={name} precip_mm={precip_mm} />
      })}
    </Wrapper>
  )
}

export default Opad

const Wrapper = styled.section`
  .nazwa {
    display: flex;
    justify-content: center;
    border: 2px solid red;
  }
`
