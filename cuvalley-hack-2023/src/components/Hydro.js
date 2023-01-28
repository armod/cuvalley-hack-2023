import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'
import data from '../assets/zlewnia-stacje'
import ListHydro from './ListHydro'
import daneHydro from '../assets/hydro'

function findRecords(data, searchValue1, searchValue2) {
  var match = null
  var closestMatch = null
  var closestDiff = Number.MAX_VALUE

  data.forEach(function (item) {
    if (
      item['GŁOGÓW (151160060)'] === searchValue1 &&
      item['RACIBÓRZ-MIEDONIA (150180060)'] === searchValue2
    ) {
      match = item
      // console.log(match)
    } else if (item['GŁOGÓW (151160060)'] === searchValue1) {
      var diff = Math.abs(item['RACIBÓRZ-MIEDONIA (150180060)'] - searchValue2)
      if (diff < closestDiff) {
        closestDiff = diff
        closestMatch = item
      }
    }
  })

  if (match === null) {
    match = closestMatch
  }

  var index = data.indexOf(match)
  // console.log(data.slice(index, index + 10))
  return data.slice(index, index + 10)
}

const Hydro = () => {
  const { dataHydro, dataHydroXLSX, stanWodyGlogow, stanWodyRaciborz } =
    useGlobalContext()
  const [filteredArray, setFilteredArray] = useState([])

  const poziomWodyGlogow = Number(stanWodyGlogow.stan_wody)
  // const poziomWodyRaciborz = Number(stanWodyRaciborz.stan_wody)
  const poziomWodyRaciborz = 500

  console.log('poziom', poziomWodyGlogow, poziomWodyRaciborz)

  const handleFilter = (arr, num1, num2) => {
    setFilteredArray(findRecords(arr, num1, num2))
  }

  return (
    <Wrapper>
      <div>
        <button
          onClick={() =>
            handleFilter(dataHydroXLSX, poziomWodyGlogow, poziomWodyRaciborz)
          }
        >
          Filter
        </button>
        {filteredArray.map((item, index) => {
          return (
            <div key={index}>
              <h6>{item.__EMPTY}</h6>
              <h6>{item['GŁOGÓW (151160060)']}</h6>
              <h6>{item['RACIBÓRZ-MIEDONIA (150180060)']}</h6>
            </div>
          )
        })}
        {console.log('filtered:', filteredArray)}
      </div>

      <div className='info'>
        <h2>Zlewnia - stacje hydrologiczne</h2>
        {/* <h5>Data pomiaru: {dataPomiaru}</h5> */}
      </div>
      <div>
        {dataHydro.map((item) => {
          const { id_stacji, stacja, stan_wody } = item
          if (id_stacji === '151160060') {
            return (
              <h3 key={id_stacji}>
                {stacja} {/* dla Głogowa */}
                <span> </span>- stan wody: {stan_wody}cm
              </h3>
            )
          }
          if (id_stacji === '150180060') {
            return (
              <h3 key={id_stacji}>
                {stacja} {/* dla Raciborza */}
                <span> </span>- stan wody: {stan_wody}cm
              </h3>
            )
          }
        })}
      </div>

      <div className='lists'>
        <div className='list1'>
          {dataHydro.map((item) => {
            const { id_stacji, stacja, stan_wody } = item

            for (let i = 0; i < data.length; i++) {
              if (data[i].id == id_stacji) {
                // console.log(stacja, stan_wody)
                return <ListHydro key={id_stacji} {...item} />
              }
            }
          })}
        </div>
        <div className='list2'>
          {daneHydro.map((item, index) => {
            const { id_151160060, id_150180060, data } = item
            if (
              id_151160060 == poziomWodyGlogow &&
              id_150180060 == poziomWodyRaciborz
            ) {
              return (
                <div key={index}>
                  <h4>!{data}</h4>
                  <h5>Głogów: {id_151160060}</h5>
                  <h5>Racibórz: {id_150180060}</h5>
                </div>
              )
            } else if (id_151160060 == poziomWodyGlogow) {
              return (
                <div key={index}>
                  <h4>{data}</h4>
                  <h5>Głogów: {id_151160060}</h5>
                  <h5>Racibórz: {id_150180060}</h5>
                </div>
              )
            }
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Hydro

const Wrapper = styled.section`
  border: 2px #de824e solid;
  border-radius: 15px;
  padding: 15px;
  margin: 15px;
  grid-column: 1;
  grid-row: 2;
  .info {
    border: 1px #de824e solid;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }
  .lists {
    display: flex;
    .list1 {
      width: 50%;
      border: 1px solid blue;
    }
    .list2 {
      width: 50%;
      div {
        border: 1px solid green;
      }
    }
  }
`
