import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  const currentTime = new Date()
  const rok = currentTime.getFullYear()
  const miesiac = currentTime.getMonth()
  const dzien = currentTime.getDay()
  return (
    <Wrapper>
      <div className='data'>
        {rok}-{miesiac > 10 ? miesiac + 1 : '0' + (miesiac + 1)}-
        {dzien < 10 ? '0' + dzien : dzien}
      </div>
      <span>;;</span>
      <ul>
        <li>
          <a href='#'>Zlewnia - stacje hydro</a>
        </li>
        <li>
          <a href='#'>Zlewnia - stacje meteo</a>
        </li>
        <li>
          <a href='#'>Prognoza</a>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 1px solid red;
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
