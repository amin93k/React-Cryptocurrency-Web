import React from 'react'
import { Table, Space, Avatar } from 'antd'
import SparkChart from './SparkChart'

function CoinsTable({coins}) {

    const coinsSource = coins.map((coin, index) => {

        const coinMarketInfo = coin?.DISPLAY?.USD
        const coinInfo = coin.CoinInfo

        return {
            key: index + 1,
            name: {
                fullName: coinInfo.FullName,
                name: coinInfo.Name,
                imageUrl: `https://www.cryptocompare.com/${coinInfo.ImageUrl}`
            },
            price: coinMarketInfo?.PRICE || '_',
            change24H: coinMarketInfo?.CHANGEPCT24HOUR || null,
            TotalVolume24H: coinMarketInfo?.TOTALVOLUME24HTO || '_',
            marketCap: coinMarketInfo?.MKTCAP || '_',
            chartInfo: coinInfo.Name
        }
    })

    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, { name: { fullName, name, imageUrl } }) => {
                return (
                    <Space size='middle'>
                        <Avatar src={imageUrl} />
                        <span >{fullName}</span>
                        <span >{name}</span>
                    </Space>
                )
            }
        },
        {
            title: 'Last Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '24H %',
            dataIndex: 'change24H',
            key: 'change24H',
            render: (changePtc24H) => {

                if (changePtc24H === null) {
                    return <span>-</span>
                }
                else {
                    const color = changePtc24H[0] === '-' ? "#f5222d" : "#52c41a"
                    return (
                        <span style={{ color: color }}>
                            {changePtc24H} %
                        </span>
                    )
                }
            }
        },
        {
            title: 'Total Vol',
            dataIndex: 'TotalVolume24H',
            key: 'TotalVolume24H'
        },
        {
            title: 'Market Cap',
            dataIndex: 'marketCap',
            key: 'marketCap'
        },
        {
            title: 'Last 3 Days',
            dataIndex: 'chartInfo',
            key: 'chart',
            width: '200px',
            render: (coinName) => {
                return (
                    <SparkChart
                        coinName={coinName}
                        getType='hour'
                        dataLength={72}
                    />
                )
            }
        }
    ]

    return (
        <Table
            columns={columns}
            dataSource={coinsSource}
            pagination={false}
            className='trend-table'
            scroll={{ x: 'max-content' }}
        />
    )
}

export default CoinsTable