import React, { useEffect, useContext, useState } from 'react'

const meteo = 'https://danepubliczne.imgw.pl/api/data/synop'
const meteo2 = 'https://danepubliczne.imgw.pl/api/data/synop/station/glogów'
const hydro = 'https://danepubliczne.imgw.pl/api/data/hydro'
const forecast_api =
  'http://api.weatherapi.com/v1/current.json?key=2b50cab1a05a42ed8a181320222612&q='
// const wind = 'https://api.gios.gov.pl/pjp-api/rest/station/findAll'
// const wind = 'https://api.prognozy.ios.edu.pl/v1/PM10/1465'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [dataMeteo, setDataMeteo] = useState([])
  const [dataHydro, setDataHydro] = useState([])

  const fetchDataMeteo = async () => {
    const response = await fetch(meteo2)
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

  useEffect(() => {
    fetchDataMeteo()
    // console.log(dataMeteo)
    fetchDataHydro()
  }, [])

  return (
    <AppContext.Provider value={{ dataHydro }}>{children}</AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
