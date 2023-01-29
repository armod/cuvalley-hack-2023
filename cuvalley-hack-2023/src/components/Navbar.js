import React from 'react'
import styled from 'styled-components'
import ReadHydroXLSX from '../components/ReadHydroXLSX'
import ReadMeteoXLSX from '../components/ReadMeteoXLSX'

const Navbar = () => {
  return (
    <Wrapper>
      <img
        className='logo'
        src='https://cuvalley.com/wp-content/uploads/2021/04/CuValley_logo_top_1.png'
        alt='logo'
      />
      <div className='read'>
        <ReadHydroXLSX />
        <div className='underline'></div>
        <ReadMeteoXLSX />
      </div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  border: 2px #de824e solid;
  border-radius: 15px;
  padding: 15px;
  background: #1e2d52;
  color: #fff;
  .read {
    display: flex;
    flex-direction: column;

    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
  }
  .logo {
    /* background: #de824e; */
    /* height: 2rem; */
    /* transform: scale(2); */
  }
  .data {
    margin-right: 2rem;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      margin-right: 2rem;
      text-transform: uppercase;
      a {
        text-decoration: none;
      }
      a:hover {
        color: red;
      }
    }
  }
`
