import React, { useEffect, useContext, useState, useRef } from 'react'
import { read, utils } from 'xlsx'
import stacjeMeteo from './zlewnia-stacje-meteo'

const meteo = 'https://danepubliczne.imgw.pl/api/data/synop'
const hydro = 'https://danepubliczne.imgw.pl/api/data/hydro'
const forecast_api =
  'http://api.weatherapi.com/v1/current.json?key=2b50cab1a05a42ed8a181320222612&q='
const filePathHydro = './assets/hydro.xlsx'
const dataPomiaru = ''

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [dataMeteo, setDataMeteo] = useState([])
  const [dataHydro, setDataHydro] = useState([])
  const [dataOpad, setDataOpad] = useState([])
  const [dataHydroXLSX, setDataHydroXLSX] = useState([])
  const [dataMeteoXLSX, setDataMeteoXLSX] = useState([])
  const [stanWodyGlogow, setStanWodyGlogow] = useState([])
  const [stanWodyRaciborz, setStanWodyRaciborz] = useState([])

  // fetch
  const fetchDataMeteo = async () => {
    console.log(forecast_api + 'GLOGOW')
    const response = await fetch(meteo)
    const data = await response.json()
    console.log(data)
    setDataMeteo(data)
  }

  //fetch danych publicznych od imgw.pl
  const fetchDataHydro = async () => {
    const response = await fetch(hydro)
    const data = await response.json()
    console.log(data)
    setDataHydro(data)
    setStanWodyGlogow(data.find((item) => item.id_stacji === '151160060'))
    setStanWodyRaciborz(data.find((item) => item.id_stacji === '150180060'))
  }

  //fetch danych z forecast_api (dane meteo z imgw nie udostępniają wszystkich stacji) - dlatego uzywam zewnętrznego źródła
  const fetchDataOpad = async () => {
    const data = await Promise.all(
      stacjeMeteo.map((stacja) =>
        fetch(forecast_api + stacja).then((res) => res.json())
      )
    )
    console.log(data)
    setDataOpad(data)
    // const response = await fetch(forecast_api + 'GLOGOW')
    // const data = await response.json()
    // setDataOpad(data)
    // console.log(data)
  }

  //********ładowanie z pliku hydro ręczne********
  const handleHydroXLSX = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const binary = '' + e.target.result
      const workbook = read(binary, { type: 'binary' })
      const sheet = workbook.Sheets[workbook.SheetNames[0]]
      const jsonData = utils.sheet_to_json(sheet)
      setDataHydroXLSX(jsonData)
      console.log('hydro', jsonData)
    }
    reader.readAsBinaryString(file)
    // console.log(file)
  }
  //********ładowanie z pliku meteo ręczne********
  const handleMeteoXLSX = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const binary = '' + e.target.result
      const workbook = read(binary, { type: 'binary' })
      const sheet = workbook.Sheets[workbook.SheetNames[1]]
      const jsonData = utils.sheet_to_json(sheet)
      setDataMeteoXLSX(jsonData)
      console.log(jsonData)
    }
    reader.readAsBinaryString(file)
    // console.log(file)
  }

  useEffect(() => {
    // fetchDataMeteo()
    fetchDataHydro()
    fetchDataOpad()
  }, [])

  return (
    <AppContext.Provider
      value={{
        dataHydro,
        dataOpad,
        handleHydroXLSX,
        handleMeteoXLSX,
        dataHydroXLSX,
        dataMeteoXLSX,
        stanWodyGlogow,
        stanWodyRaciborz,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
