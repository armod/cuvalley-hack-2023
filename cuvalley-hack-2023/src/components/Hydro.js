import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'
import data from '../assets/zlewnia-stacje'
import ListHydro from './ListHydro'

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
  const poziomWodyRaciborz = Number(stanWodyRaciborz.stan_wody)
  // const poziomWodyRaciborz = 500

  // console.log('poziom', poziomWodyGlogow, poziomWodyRaciborz)

  const handleFilter = (arr, num1, num2) => {
    setFilteredArray(findRecords(arr, num1, num2))
  }
  function increaseDate(daysToAdd) {
    var currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + daysToAdd)
    var options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }
    var updatedDate = currentDate.toLocaleDateString('pl-PL', options)
    return updatedDate
  }
  return (
    <Wrapper>
      <div>
        <button
          className='btn'
          onClick={() =>
            handleFilter(dataHydroXLSX, poziomWodyGlogow, poziomWodyRaciborz)
          }
        >
          Generuj prognozę
        </button>
        <div className='prognoza'>
          Prognozowane dane poziomu rzeki na podstawie danych historycznych (od
          dzisiaj + 9 dni)
          <div className='filtered'>
            <span>Data</span>
            <span>Poziom Głogów</span>
            <span>Poziom Racibórz</span>
            <span>Data historyczna</span>
          </div>
        </div>

        {filteredArray.map((item, index) => {
          let data = increaseDate(index)
          return (
            <div key={index} className='filtered'>
              <h6>{data}</h6>
              <h6>{item['GŁOGÓW (151160060)']} cm</h6>
              <h6>{item['RACIBÓRZ-MIEDONIA (150180060)']} cm</h6>
              <h6>{item.__EMPTY}</h6>
            </div>
          )
        })}
        {/* {console.log('filtered:', filteredArray)} */}
      </div>

      {/* <div className='info'>
        <h2>Zlewnia - stacje hydrologiczne</h2>
      </div>
      <div className='stany-aktualne'>
        {dataHydro.map((item) => {
          const { id_stacji, stacja, stan_wody } = item
          if (id_stacji === '151160060') {
            return (
              <h3 key={id_stacji}>
                {stacja}
                <span> </span>- stan wody: {stan_wody}cm
              </h3>
            )
          }
          if (id_stacji === '150180060') {
            return (
              <h3 key={id_stacji}>
                {stacja}
                <span> </span>- stan wody: {stan_wody}cm
              </h3>
            )
          }
        })}
      </div> */}

      {/* <div className='lists'>
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
      </div> */}
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
  height: auto;
  h6 {
  }
  .prognoza {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  .filtered {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: #de824e 2px dotted;
    margin-bottom: 3px;
    span {
      margin-top: 10px;
      font-size: 1rem;
    }
  }
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
