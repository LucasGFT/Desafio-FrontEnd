import React, {useEffect, useState} from 'react'
import { listBreweries } from '../../api/listBreweries'
import { typesApi } from '../../types/typesApi'
import { ContainerHome, DivPages } from './style'
import ListaTodas from '../../components/ListaTodas/ListaTodas'
import Filter from '../../components/Filter/Filter'

const Home = () => {

  const [dados, setDados] = useState<typesApi[] | []>([])
  const [filter, setFilter] = useState<typesApi[] | []>([])
  const [lista, setLista] = useState({ inicio: 0, fim: 20 })

  const handleFilter = (filter: string) => {
    setLista({ inicio: 0, fim: 20 })
    if (filter === 'all') return setFilter([])
    const newDados = dados.filter((element) => element.brewery_type === filter)
    return setFilter(newDados)
  }

  const handleClick = (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement
    if (target.innerText === '1') return setLista({ inicio: 0, fim: 20 })
    if (target.innerText === '2') return setLista({ inicio: 21, fim: 41 })
    if (target.innerText === '3') return setLista({ inicio: 42, fim: 50 })
  }

  useEffect(() => {
    const api = async () => {
      const response = await listBreweries()
      setDados(response)
    }
    api()
  }, [])
  
  const quantidadePagina = filter.length === 0 ? 
    Array(Math.ceil(dados.length / 20)).fill(null) : 
    Array(Math.ceil(filter.length / 20)).fill(null);

  return (
    <ContainerHome>
      <Filter func={handleFilter} />
      <ListaTodas dados={filter.length > 0 ? filter : dados} objQuantidade={lista} />
      <DivPages>
        {
          quantidadePagina.map((_e: any, index: number) => (
            <p key={index} onClick={(e) => handleClick(e)}>{index + 1}</p>
          ))
        }
        </DivPages>
    </ContainerHome>
  )
}

export default Home