import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptoQuery } from '../../services/cryptoApi'
import { Select } from 'antd'
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'

function CryptoDetails() {
    const isDark = useSelector(state => state.theme.isThemeDark)
    const theme = isDark ? "dark" : "light"

    const [timeType, setTimeType] = useState("day")
    const [chartType, setChartType] = useState("candlestick")

    const { coinName } = useParams()

    const url = `v2/histo${timeType}`
    const params = {
        fsym: coinName,
        tsym: "USD",
        limit: 150
    }

    const { data: coinsHistory, error, isLoading } = useGetCryptoQuery({ url, params })
    const historyData = coinsHistory?.Data?.Data

    // Prepare data for the chart based on the selected chart type
    let chartData = []
    if (chartType === "line") {
        chartData = historyData?.map(data => {
            const { time, close } = data
            return { x: new Date(time * 1000), y: close } // Convert time to a Date object
        }) || []
    }
    else {
        chartData = historyData?.map(data => {
            const { time, open, high, low, close } = data
            return { x: new Date(time * 1000), y: [open, high, low, close] }
        }) || []
    }

    const options = {
        chart: {
            id: 'chart',
            type: chartType
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: "#0067e6"
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        },
        tooltip: {
            theme
        }
    }
    console.log(options)

    const series = [
        {
            data: chartData
        }
    ]

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error fetching data: {error.message}</p>

    return (
        <div>
            <Select
                defaultValue={timeType}
                style={{
                    marginRight: 20,
                    width: 120,
                }}
                onChange={(value) => {
                    setTimeType(value)
                }}
                options={[
                    { value: 'minute', label: 'Minute' },
                    { value: 'day', label: 'Day' },
                    { value: 'hour', label: 'Hour' }
                ]}
            />

            <Select
                defaultValue={chartType}
                style={{
                    width: 120,
                }}
                onChange={(value) => {
                    setChartType(value)
                }}
                options={[
                    { value: 'line', label: 'Line' },
                    { value: 'candlestick', label: 'Candle' }
                ]}
            />

            <ReactApexChart options={options} series={series} type={chartType} height={450} />
        </div>
    )
}

export default CryptoDetails
