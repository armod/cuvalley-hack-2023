import React, { useEffect, useContext, useState } from 'react'
import stacjeMeteo from './zlewnia-stacje-meteo'

const meteo = 'https://danepubliczne.imgw.pl/api/data/synop'
const hydro = 'https://danepubliczne.imgw.pl/api/data/hydro'
const forecast_api =
  'http://api.weatherapi.com/v1/current.json?key=2b50cab1a05a42ed8a181320222612&q='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [dataMeteo, setDataMeteo] = useState([])
  const [dataHydro, setDataHydro] = useState([])
  const [dataOpad, setDataOpad] = useState([])

  const fetchDataMeteo = async () => {
    console.log(forecast_api + 'GLOGOW')
    const response = await fetch(meteo)
    const data = await response.json()
    console.log(data)
    setDataMeteo(data)
    // console.log('added')
  }
  const fetchDataHydro = async () => {
    const response = await fetch(hydro)
    const data = await response.json()
    // console.log(data)
    setDataHydro(data)
    // console.log(dataHydro)
  }
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

  useEffect(() => {
    // fetchDataMeteo()
    fetchDataHydro()
    fetchDataOpad()
  }, [])

  return (
    <AppContext.Provider value={{ dataHydro, dataOpad }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
