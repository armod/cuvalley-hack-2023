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
  border: 1px solid red;
  width: 90vw;
  margin: 0 auto;
`
