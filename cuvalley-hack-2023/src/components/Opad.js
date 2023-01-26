import React from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'
import data from '../zlewnia-stacje-meteo'

const Opad = () => {
  const { dataOpad } = useGlobalContext()
  return <div>Opad</div>
}

export default Opad
