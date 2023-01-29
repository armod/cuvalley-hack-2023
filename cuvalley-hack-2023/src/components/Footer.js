import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Maciej Miąso </span>
        CuValley Hack 2023
      </h5>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 2px #de824e solid;
  border-radius: 15px;
  padding: 15px;
  background: #1e2d52;
  color: #fff;
  span {
    color: #de824e;
  }
`
