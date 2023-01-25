import React from 'react'
import { useGlobalContext } from '../context'
import data from '../zlewnia-stacje'
import ListHydro from './ListHydro'

const Hydro = () => {
  const { dataHydro } = useGlobalContext()
  return (
    <>
      <div>
        {dataHydro.map((item) => {
          const { id_stacji, stacja, stan_wody } = item
          if (id_stacji === '151160060') {
            return (
              <h2 key={id_stacji}>
                Stacja: {stacja}
                <span> </span>
                Stan wody: {stan_wody}cm
              </h2>
            )
          }
        })}
      </div>
      <div className='nazwa'>
        <h2>Zlewnia - stacje</h2>

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
    </>
  )
}

export default Hydro
