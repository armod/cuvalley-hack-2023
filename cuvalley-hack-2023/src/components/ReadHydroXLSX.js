import React from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'

const ReadHydroXLSX = () => {
  const { handleHydroXLSX, dataHydroXLSX } = useGlobalContext()
  return (
    <Wrapper>
      <label htmlFor='file-upload'>Wybierz plik z danymi hydro </label>
      <input
        id='file-upload'
        type='file'
        onChange={(e) => {
          e.preventDefault()
          if (e.target.files[0].name == 'hydro.xlsx') {
            handleHydroXLSX(e.target.files[0])
            console.log(e.target.files[0].name)
          }
        }}
      />
      <div>
        Status:{' '}
        {dataHydroXLSX.length > 1
          ? 'Załadowano ' + dataHydroXLSX.length
          : 'Nie załadowano odpowiedniego pliku'}
      </div>
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
  grid-column: 1/2;
  grid-row: 1;
`
