import { Avatar, Flex, Space, Table, Typography } from 'antd'
import React from 'react'

function TrendCoinsTable({ coins }) {

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
            change24H: coinMarketInfo?.CHANGEPCT24HOUR || '_',
            TotalVolume24H: coinMarketInfo?.TOTALVOLUME24HTO || '_',
            marketCap: coinMarketInfo?.MKTCAP || '_',
            chart: {
                coinName: coinInfo.Name,
                limit: 7
            }
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
                const color = changePtc24H[0] === "-" ? "#f5222d" : "#52c41a"

                return (
                    <span style={{color: color }}>
                        {changePtc24H} %
                    </span>
                )
            }
        },
        {
            title: 'Total Vol',
            dataIndex: 'TotalVolume24H',
            key: 'TotalVolume24H',
        },
        {
            title: 'Market Cap',
            dataIndex: 'marketCap',
            key: 'marketCap',
        },
        {
            title: 'Last 7 Days',
            dataIndex: 'chart',
            key: 'chart',
        }
    ]

    return (
        <div>
            <Flex align='center' justify='space-between'>
                <Typography.Title level={2} style={{ marginBottom: 0, marginTop: 80 }}>
                    Market Trend
                </Typography.Title>
                {/* button */}
            </Flex>
            <Table
                columns={columns}
                dataSource={coinsSource}
                pagination={false}
                className='trend-table'
            />
        </div>
    )
}

export default TrendCoinsTable