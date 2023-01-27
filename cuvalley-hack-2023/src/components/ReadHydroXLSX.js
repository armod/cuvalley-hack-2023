import React from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'

const ReadHydroXLSX = () => {
  const { handleHydroXLSX, dataHydroXLSX, readHydroXLSX } = useGlobalContext()
  return (
    <Wrapper>
      <input
        type='file'
        onChange={(e) => {
          if (e.target.files[0].name == 'hydro.xlsx') {
            handleHydroXLSX(e.target.files[0])
            console.log(e.target.files[0].name)
          }
        }}
      />
      {/* <table>
        <thead>
          <tr>
            {dataHydroXLSX.length > 0 &&
              Object.keys(dataHydroXLSX[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {dataHydroXLSX.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </Wrapper>
  )
}

export default ReadHydroXLSX

const Wrapper = styled.section`
  grid-column: 1/3;
  grid-row: 1;
  border: 1px dotted red;
`
