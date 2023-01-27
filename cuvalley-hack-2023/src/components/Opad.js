import React from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'
import data from '../zlewnia-stacje-meteo_'
import ListOpad from '../components/ListOpad'

const Opad = () => {
  const { dataOpad } = useGlobalContext()
  return (
    <Wrapper>
      <div className='nazwa'>
        <h2>Zlewnia - stacje meteorologiczne</h2>
      </div>
      <div>
        {dataOpad.map((item, index) => {
          const { name } = item.location
          if (name.toUpperCase() == 'GLOGOW') {
            return (
              <h2 key={index}>
                Stacja: {name} {/* dla Głogowa */}
              </h2>
            )
          }
        })}
      </div>
      {dataOpad.map((item, index) => {
        const { name } = item.location
        const { precip_mm } = item.current
        return <ListOpad key={index} name={name} precip_mm={precip_mm} />
      })}
    </Wrapper>
  )
}

export default Opad

const Wrapper = styled.section`
  border: 2px #de824e solid;
  border-radius: 15px;
  padding: 15px;
  margin: 15px;
  .nazwa {
    display: flex;
    /* justify-content: center; */
  }
`
