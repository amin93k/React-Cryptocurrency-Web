import React from 'react'
import { Row, Col, Avatar, Flex, Space, Typography, Card, Badge } from 'antd'
import SparkChart from '../SparkChart'

const { Title, Text } = Typography

function PopularCoins({ coins }) {
    return (
        <Row gutter={[20, 20]}>
            {coins.map((coin, index) => {
                const imageUrl = `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`
                const isPriceIncrease = coin.RAW.USD.CHANGEPCT24HOUR > 0
                const priceFontSize = coin.DISPLAY.USD.PRICE.length > 11 ? 18 : 20

                return (
                    <Col key={index} xs={24} sm={12} lg={6}>
                        <Card className='coin-card'>
                            <Flex align='center' justify='space-between' style={{ marginBottom: 8 }}>
                                <Space size="middle">
                                    <Avatar src={imageUrl} />
                                    <Title level={4} style={{ marginBottom: 0 }}>
                                        {coin.CoinInfo.FullName}
                                    </Title>
                                </Space>
                                <Text>
                                    {coin.CoinInfo.Name}/USD
                                </Text>
                            </Flex>

                            <Flex align='center' justify='space-between' style={{marginBottom: 5}}>
                                <Space style={{ marginLeft: 10 }}>
                                    <Text strong={true} style={{ fontSize: priceFontSize }}>
                                        {coin.DISPLAY.USD.PRICE}
                                    </Text>
                                    <Badge
                                        count={`${coin.DISPLAY.USD.CHANGEPCT24HOUR}%`}
                                        color={isPriceIncrease ? 'green' : 'red'} />
                                </Space>
                                <Text> 
                                    24h
                                </Text>
                            </Flex>

                            <SparkChart
                                coinName={coin.CoinInfo.Name}
                                getType='hour'
                                dataLength={24}
                            />
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

export default PopularCoins