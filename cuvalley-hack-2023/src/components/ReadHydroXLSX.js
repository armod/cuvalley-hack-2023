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
    </Wrapper>
  )
}

export default ReadHydroXLSX

const Wrapper = styled.section`
  grid-column: 1/2;
  grid-row: 1;
`
