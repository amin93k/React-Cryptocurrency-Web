import { Flex, Typography, Avatar, Space, Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

function FooterCom() {
  return (
    <>
      <Flex gap={80}>
        <div>
          <div>
            <Avatar src='./src/images/logo.png' size={50} />
            <Title
              level={5}
              style={{ display: "inline" }}
            >
              Crypto Land
            </Title>
          </div>
          <Space style={{ marginTop: 20, marginLeft: 8 }}>
            <InstagramFilled style={{ fontSize: 20 }} />
            <FacebookFilled style={{ fontSize: 20 }} />
            <LinkedinFilled style={{ fontSize: 20 }} />
            <TwitterOutlined style={{ fontSize: 20 }} />
          </Space>
        </div>
        <div>
          <h3>Page</h3>
          <Flex vertical gap={10}>
            <Link to='/cryptocurrencies'>
              <Text>Cryptocurrencies</Text>
            </Link>
            <Link to='/exchanges'>
              <Text>Exchanges</Text>
            </Link>
            <Link to='/news'>
              <Text>News</Text>
            </Link>
          </Flex>
        </div>
      </Flex>

      <Divider />
      <Text type='secondary'>
        Copyright @ 2023 Company
      </Text>
      <div className='footerBlurEffect'></div>
    </>
  )
}

export default FooterCom