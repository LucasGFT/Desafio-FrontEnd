import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { breweries } from '../../api/listBreweries'
import { typesApi } from '../../types/typesApi';
import Carregamento from '../../components/Carregamento/Carregamento';
import { LeftOutlined } from '@ant-design/icons';
import { BreweryContainer, InfoBrewery } from './style';

const Brewery = () => {
    const { id } = useParams<{ id: string }>();
    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState<typesApi| null>(null)

    useEffect(() => {
        const api = async () => {
            if (id) {
            const response: typesApi = await breweries(id)
            setDados(response)
            setCarregando(false)
            }
        }
        api()
        }, [id])

  return (
    <BreweryContainer>
        {carregando ? <Carregamento /> : (
            <>
            {dados && (
                <>
                <Link className='link' to="/"><LeftOutlined />{' '}Back</Link>
                <InfoBrewery>
                    <h3>{dados.name}</h3>
                    <p>Type: {dados.brewery_type}</p>
                    <p>Street: {dados.street}</p>
                    <p>City: {dados.city}</p>
                    <p>State: {dados.state}</p>
                    <p>Postal code: {dados.postal_code}</p>
                    <p>Country: {dados.country}</p>
                    <p>Website: <a href={dados.website_url}>{dados.website_url}</a></p>
                    <p>Phone: {dados.phone}</p>
                    {dados.latitude && dados.longitude && (<p>Open in maps: {dados.latitude}, {dados.longitude}</p>)}
                </InfoBrewery>
                </>
            )}
            </>
            )}
    </BreweryContainer>
  )
}

export default Brewery