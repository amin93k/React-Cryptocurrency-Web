import React from 'react'
import { Row, Col, Avatar, Flex, Space, Typography, Card, Badge } from 'antd'
import SparkChart from '../SparkChart'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

function PopularCoins({ coins }) {
    return (
        <Row gutter={[20, 20]}>
            {coins.map((coin, index) => {
                const coinInfo = coin.CoinInfo
                const priceInfo = coin.DISPLAY.USD
                const imageUrl = `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`
                const isPriceIncrease = coin.RAW.USD.CHANGEPCT24HOUR > 0
                const priceFontSize = priceInfo.PRICE.length > 11 ? 16 : 18
console.log(coinInfo)
                return (
                    <Col key={index} xs={24} sm={12} lg={6}>
                        <Link to={`/Crypto/${coinInfo.Name}`}>
                            <Card className='coin-card'>
                                <Flex align='center' justify='space-between' style={{ marginBottom: 8 }}>
                                    <Space>
                                        <Avatar src={imageUrl} />
                                        <Title level={4} style={{ marginBottom: 0 }}>
                                            {coinInfo.FullName}
                                        </Title>
                                    </Space>
                                    <Text>
                                        {coinInfo.Name}/USD
                                    </Text>
                                </Flex>

                                <Flex align='center' justify='space-between' style={{ marginBottom: 5 }}>
                                    <Space style={{ marginLeft: 10 }}>
                                        <Text strong={true} style={{ fontSize: priceFontSize }}>
                                            {priceInfo.PRICE}
                                        </Text>
                                        <Badge
                                            count={`${priceInfo.CHANGEPCT24HOUR}%`}
                                            color={isPriceIncrease ? 'green' : 'red'} />
                                    </Space>
                                    <Text>
                                        24h
                                    </Text>
                                </Flex>

                                <SparkChart
                                    coinName={coinInfo.Name}
                                    getType='hour'
                                    dataLength={24}
                                />
                            </Card>
                        </Link>
                    </Col>
                )
            })}
        </Row>
    )
}

export default PopularCoins