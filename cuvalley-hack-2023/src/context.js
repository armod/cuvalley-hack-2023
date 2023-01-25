import React, { useEffect, useContext, useState } from 'react'

const meteo = 'https://danepubliczne.imgw.pl/api/data/synop'
const hydro = 'https://danepubliczne.imgw.pl/api/data/hydro'
// const wind = 'https://api.gios.gov.pl/pjp-api/rest/station/findAll'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [dataMeteo, setDataMeteo] = useState([])
  const [dataHydro, setDataHydro] = useState([])

  const fetchDataMeteo = async () => {
    const response = await fetch(meteo)
    const data = await response.json()
    // console.log(data)
    setDataMeteo(data)
    // console.log('added')
  }
  const fetchDataHydro = async () => {
    const response = await fetch(hydro)
    const data = await response.json()
    console.log(data)
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
