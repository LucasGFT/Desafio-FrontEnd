import React from 'react'
import { Elemento, Lista, Type } from './styled'
import { Link } from 'react-router-dom'
import { typesApi } from '../../types/typesApi'

type Props = {
    dados: typesApi[];
    objQuantidade: { inicio: number, fim: number }
}

const ListaTodas = ({dados, objQuantidade}: Props) => {
  return (
    <Lista>{dados.slice(objQuantidade.inicio, objQuantidade.fim).map((element, index) => (
      <Link to={`/${element.id}`} key={index}>
        <Elemento>
          <h3>{element.name}</h3>
          <div>
          <p>{element.street} {element.postal_code}</p>
          <p>{element.city} {element.state}</p>
          <p>{element.country}</p>
          </div>
          <Type>{element.brewery_type}</Type>
        </Elemento>
      </Link>
      ))}</Lista>
  )
}

export default ListaTodas