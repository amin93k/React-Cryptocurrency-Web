import { Col, Row, Typography } from 'antd'
import React from 'react'

const { Title, Text } = Typography

function HomeHead() {
  return (
    <Row align={'middle'} justify={'center'} gutter={[20, 50]} className='head-wrapper'>
      <Col xs={24} sm={24} md={12}>
        <div className='head__title'>
          <Title level={1}>
            Now ,Cryptocurrencies Price
          </Title>
          <Text >
            Here we have provided the price of almost all cryptocurrencies
          </Text>
          <span className='head__title--areola'></span>
        </div>
      </Col>

      <Col xs={24} sm={24} md={12}>
        <div className='head__image'>
          <span className='head__image--areola'></span>
          <img src="./src/images/pngwing 5.png" alt="coins" />
        </div>
      </Col>
    </Row>
  )
}

export default HomeHead