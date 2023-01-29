import React from 'react'
import styled from 'styled-components/macro'

const Title = () => {
  return <Wrapper>Odra Water Estimator</Wrapper>
}

export default Title

const Wrapper = styled.article`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #1e2d52;
  margin-bottom: 5px;
`
