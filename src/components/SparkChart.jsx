import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useGetCryptoQuery } from '../services/cryptoApi';

function SparkChart({ coinName, isPriceIncrease }) {
    const params = {
        fsym: coinName,
        tsym: 'USD',
        limit: 24
    }

    const url = "v2/histohour"

    const { data, error, isLoading } = useGetCryptoQuery({ url, params });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading data.</p>;
    }

    let dataMin = data?.Data.Data[0].close
    let dataMax = data?.Data.Data[0].close

    const chartData = data?.Data.Data.map(hourPrice => {
        const closePrice = hourPrice.close
        if (closePrice > dataMax) {
            dataMax = closePrice
        }
        if (closePrice < dataMin) {
            dataMin = closePrice
        }
        return { "Close Price": closePrice }
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
                <XAxis hide />
                <YAxis hide domain={[dataMin, dataMax]} />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="Close Price"
                    stroke={isPriceIncrease ? '#82ca9d' : '#ff7373'}
                    fill={isPriceIncrease ? 'url(#positiveGradient)' : 'url(#negativeGradient)'}
                    strokeWidth={2}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default SparkChart;