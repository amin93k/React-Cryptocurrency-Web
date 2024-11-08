import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useGetCryptoQuery } from '../services/cryptoApi';
import { Spin } from 'antd';

function SparkChart({ coinName, getType, dataLength }) {
    const params = {
        fsym: coinName,
        tsym: 'USD',
        limit: dataLength - 1
    }

    const url = `v2/histo${getType}`

    const { data: coinData, error, isLoading } = useGetCryptoQuery({ url, params });

    if (isLoading) {
        return <Spin />;
    }

    if (error) {
        return <span >Opps ocurred error!</span>;
    }

    const convertTimestamp = (timestamp) => {
        // Convert to milliseconds  
        const date = new Date(timestamp * 1000)
        return date.toLocaleString('en-US',
            { hour: '2-digit', minute: '2-digit', hour12: false })
    }

    const isPriceIncrease = (coinData?.Data.Data[dataLength - 1].close - coinData?.Data.Data[0].close) > 0

    let dataMinPrice = coinData?.Data.Data[0].close
    let dataMaxPrice = coinData?.Data.Data[0].close

    const chartData = coinData?.Data.Data.map(hourData => {
        const closePrice = hourData.close
        if (closePrice > dataMaxPrice) {
            dataMaxPrice = closePrice
        }
        if (closePrice < dataMinPrice) {
            dataMinPrice = closePrice
        }
        return {
            "time": convertTimestamp(hourData.time),
            "$": closePrice
        }
    });

    return (
        <ResponsiveContainer width="100%" height={40}>
            <AreaChart
                data={chartData}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
                <defs>

                    <linearGradient id="positiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#82ca9d', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#d0f0c0', stopOpacity: 1 }} />
                    </linearGradient>

                    <linearGradient id="negativeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ff7373', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#ffaaaa', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <XAxis hide dataKey='time' />
                <YAxis hide domain={[dataMinPrice, dataMaxPrice]} />
                <Tooltip
                    itemStyle={{ color: '#000' }}
                    separator=''
                />
                <Area
                    type="monotone"
                    dataKey="$"
                    stroke={isPriceIncrease ? '#82ca9d' : '#ff7373'}
                    fill={isPriceIncrease ? 'url(#positiveGradient)' : 'url(#negativeGradient)'}
                    strokeWidth={2}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default SparkChart;