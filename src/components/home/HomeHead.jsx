import { Col, Grid, Row, Typography } from 'antd'
import React from 'react'

const { Title, Text } = Typography
const { useBreakpoint } = Grid

function HomeHead() {
  const { xs } = useBreakpoint()

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
          {!xs &&
            <span className='head__title--areola'></span>
          }
        </div>
      </Col>

      <Col xs={24} sm={24} md={12}>
        <div className='head__image'>
          <span className='head__image--areola'></span>
          <img src="/images/pngwing 5.png" alt="coins" />
        </div>
      </Col>
    </Row>
  )
}

export default HomeHead