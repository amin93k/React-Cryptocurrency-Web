import React from 'react'
import { Row, Col, Avatar, Flex, Space, Typography, Card } from 'antd'
import SparkChart from '../SparkChart'

const { Title, Text } = Typography

function PopularCoins({ coins, isLoading }) {
    return (
        <Row gutter={[16, 16]}>
            {coins.map((coin, index) => {
                const imageUrl = `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`

                return (
                    <Col key={index} xs={24} sm={12} lg={8} xxl={6}>
                        <Card >
                            <Flex align='center' justify='space-between'>
                                <Space size="middle">
                                    <Avatar src={imageUrl} />
                                    <Title level={4} style={{ marginBottom: 0 }}>
                                        {coin.CoinInfo.FullName}
                                    </Title>
                                </Space>
                                <Text strong={true}>
                                    {coin.CoinInfo.Name}/USD
                                </Text>
                            </Flex>
                            <hr />
                            <Text strong={true} style={{ fontSize: 20 }}>
                                {coin.DISPLAY.USD.PRICE}
                            </Text>
                            <SparkChart
                                coinName={coin.CoinInfo.Name}
                                isPriceIncrease={coin.RAW.USD.CHANGEPCT24HOUR > 0}
                            />
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

export default PopularCoins