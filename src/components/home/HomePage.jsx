import React from 'react'
import { useGetCryptoQuery } from '../../services/cryptoApi'
import HomeHead from './HomeHead';
import './homePage.css'
import PopularCoins from './PopularCoins';


function HomePage() {
    const params = { 
        limit: 10,
        tsym: 'USD'
    }

    const url = 'top/totalvolfull'
    const { data, error, isLoading } = useGetCryptoQuery({ url, params })

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;
    console.log(data)
    return (
        <div>
            <HomeHead />

            <PopularCoins coins={data.Data.slice(0, 3)} isLoading={isLoading}/>
            
        </div>
    )
}

export default HomePage