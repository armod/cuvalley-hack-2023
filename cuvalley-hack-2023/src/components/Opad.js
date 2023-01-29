import React from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'
import data from '../zlewnia-stacje-meteo_'
import ListOpad from '../components/ListOpad'

const sumProperty = (arr, prop) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]['current'][prop]
  }
  console.log(sum)
  return (sum / arr.length).toFixed(2)
}

const Opad = () => {
  const { dataOpad } = useGlobalContext()
  const sum = dataOpad
    .map((num) => num * 2)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return (
    <Wrapper>
      <div className='title'>
        Aktualna średnia suma opadów zlewni wynosi
        <span>{sumProperty(dataOpad, 'precip_mm')} mm</span>
      </div>
      <div className='underline'></div>
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
  grid-column: 1/3;
  grid-row: 3;
  overflow-y: scroll;
  height: 300px;
  .title {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-style: italic;
  }
  span {
    margin-left: 10px;
  }
`
