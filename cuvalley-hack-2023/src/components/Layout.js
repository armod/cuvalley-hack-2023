import React from 'react'
import Navbar from './Navbar'
import '../assets/css/styles.css'
import Footer from './Footer'
import styled from 'styled-components/macro'
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 2px #de824e solid;
  border-radius: 15px;
  padding: 15px;
  width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
`
