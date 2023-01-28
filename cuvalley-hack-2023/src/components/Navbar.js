import React from 'react'
import styled from 'styled-components'
import ReadHydroXLSX from '../components/ReadHydroXLSX'
import ReadMeteoXLSX from '../components/ReadMeteoXLSX'

const Navbar = () => {
  const currentTime = new Date()
  const rok = currentTime.getFullYear()
  const miesiac = currentTime.getMonth() + 1
  const dzien = currentTime.getDate()
  return (
    <Wrapper>
      <img
        className='logo'
        src='https://cuvalley.com/wp-content/uploads/2021/04/CuValley_logo_top_1.png'
        alt='logo'
      />
      <div className='data'>
        {rok}-{miesiac > 10 ? miesiac : '0' + miesiac}-
        {dzien < 10 ? '0' + dzien : dzien}
      </div>
      {/* <ul>
        <li>
          <a href='#'>Zlewnia - stacje hydro</a>
        </li>
        <li>
          <a href='#'>Zlewnia - stacje meteo</a>
        </li>
        <li>
          <a href='#'>Prognoza</a>
        </li>
      </ul> */}
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
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 2px #de824e solid;
  border-radius: 15px;
  padding: 15px;
  .read {
    display: flex;
    flex-direction: column;

    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
  }
  .logo {
    background: #de824e;
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
