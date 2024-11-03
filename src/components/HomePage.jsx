import React from 'react'
import { useGetCryptoQuery  } from '../services/cryptoApi'

function HomePage() {
  const params = {
    fsyms: 'BTC', 
    tsyms: 'USD' 
  }

  const url = '/pricemultifull'

  const { data, error, isLoading } = useGetCryptoQuery({url, params });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;

    return (
        <div>
            <h1>Cryptocurrency Prices</h1>
            <ul>
                {Object.entries(data).map(([key, value]) => (
                    <li key={key}>{`${key}: ${value}`}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage