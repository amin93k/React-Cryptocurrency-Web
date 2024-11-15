import React from 'react'
import { useGetCryptoQuery } from '../../services/cryptoApi'
import HomeHead from './HomeHead';
import './homePage.css'
import PopularCoins from './PopularCoins';
import { Spin } from 'antd';
import TrendCoinsTable from './TrendCoins';
import LastNews from './LastNews';


function HomePage() {
    const params = { 
        limit: 10,
        tsym: 'USD'
    }
    const url = 'top/totalvolfull'

    const { data, error, isLoading } = useGetCryptoQuery({ url, params })

    if (isLoading) return <Spin size='large' fullscreen={true}/>;
    if (error) return <div>Error fetching data</div>;
    console.log(data)
    return (
        <>
            <HomeHead />

            <PopularCoins coins={data.Data.slice(0, 4)}/>
            
            <TrendCoinsTable coins={data.Data}/>

            <LastNews />
        </>
    )
}

export default HomePage