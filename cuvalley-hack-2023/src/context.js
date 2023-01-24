import React, { useEffect } from 'react'
import { useState } from 'react'

const meteo = 'https://danepubliczne.imgw.pl/api/data/synop'
const hydro = 'http://danepubliczne.imgw.pl/api/data/hydro/'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [dataMeteo, setDataMeteo] = useState()
  const [dataHydro, setDataHydro] = useState()

  const fetchDataMeteo = async () => {
    const response = await fetch(meteo)
    const data = await response.json()
    setDataMeteo(data)
  }
  const fetchDataHydro = async () => {
    const response = await fetch(hydro)
    const data = await response.json()
    setDataHydro(data)
  }

  useEffect(() => {
    fetchDataMeteo()
  }, [])

  return (
    <AppContext.Provider value={'hello world'}>{children}</AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
