import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useGetCryptoQuery } from '../services/cryptoApi';
import { Spin } from 'antd';
import convertTimestamp from '../utils/convertTimestamp';

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

    const firstClosePrise = coinData?.Data.Data[0].close
    const lastClosePrise = coinData?.Data.Data[dataLength - 1].close
    const isPriceIncrease = (lastClosePrise - firstClosePrise) > 0

    let coinMinPrice = coinData?.Data.Data[0].close
    let coinMaxPrice = coinData?.Data.Data[0].close

    const chartDataList = coinData?.Data.Data.map(hourData => {
        const closePrice = hourData.close
        if (closePrice > coinMaxPrice) {
            coinMaxPrice = closePrice
        }
        if (closePrice < coinMinPrice) {
            coinMinPrice = closePrice
        }
        return {
            "time": convertTimestamp(hourData.time, 'chart'),
            "$": closePrice
        }
    });

    return (
        <ResponsiveContainer width="100%" height={40}>
            <AreaChart
                data={chartDataList}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
                <defs>

                    <linearGradient id="positiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#58BD7D', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#ACDEBE', stopOpacity: 0.3 }} />
                    </linearGradient>

                    <linearGradient id="negativeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#D33535', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#E99A9A', stopOpacity: 0.3 }} />
                    </linearGradient>
                </defs>
                <XAxis hide dataKey='time' />
                <YAxis hide domain={[coinMinPrice, coinMaxPrice]} />
                <Tooltip
                    itemStyle={{ color: '#000' }}
                    separator=''
                />
                <Area
                    type="monotone"
                    dataKey="$"
                    stroke={isPriceIncrease ? '#82ca9d' : '#ff7373'}
                    fill={isPriceIncrease ? 'url(#positiveGradient)' : 'url(#negativeGradient)'}
                    strokeWidth={1}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default SparkChart;