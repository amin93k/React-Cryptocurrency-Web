import { Flex, Typography } from 'antd'
import React from 'react'

const { Title, Text } = Typography

function HomeHead() {
  return (
    <Flex align='center' justify='center' gap={100} className='head-wrapper'>
      <div className='head__title'>
        <Title level={1}>
          Now ,Cryptocurrencies Price
        </Title>
        <Text >
          Here we have provided the price of almost all cryptocurrencies
        </Text>
        <span className='head__title--areola'></span>
      </div>
      <div className='head__image'>
        <span className='head__image--areola'></span>
        <img src="./src/images/pngwing 5.png" alt="" />
      </div>
    </Flex>
  )
}

export default HomeHead