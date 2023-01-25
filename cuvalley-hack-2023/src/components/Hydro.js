import React from 'react'
import { useGlobalContext } from '../context'
import data from '../zlewnia-stacje'
import ListHydro from './ListHydro'

const Hydro = () => {
  const { dataHydro } = useGlobalContext()
  return (
    <div>
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
  )
}

export default Hydro
