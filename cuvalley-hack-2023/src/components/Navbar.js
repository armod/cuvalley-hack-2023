import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
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
