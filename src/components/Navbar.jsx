import React from 'react'
import { Menu, Button, Typography, Avatar, Flex } from "antd"
import { SunOutlined, HomeOutlined, MoneyCollectOutlined, FundOutlined, BulbOutlined, BoldOutlined, MoonOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const {pathname} = useLocation()

    const menuItems = [
        {
            icon: <HomeOutlined />,
            key: '/',
            label:
                <Link to='/'>
                    Home
                </Link>
        },
        {
            icon: <FundOutlined />,
            key: '/cryptocurrencies',
            label:
                <Link to='/cryptocurrencies'>
                    Cryptocurrencies
                </Link>
        },
        {
            icon: <MoneyCollectOutlined />,
            key: '/exchanges',
            label:
                <Link to='/exchanges'>
                    Exchanges
                </Link>
        },
        {
            icon: <BoldOutlined />,
            key: '/news',
            label:
                <Link to='/news'>
                    News
                </Link>
        },
    ]

    return (
        <Flex justify='space-between' >
            <div>
                <Link to='/'>
                    <Avatar src='./src/images/logo.png' size={50} />
                    <Typography.Title 
                    level={5}
                        style={{display: "inline"}}
                        >
                        Crypto Land
                    </Typography.Title>
                </Link>
            </div>
            <div>
                <Menu
                    items={menuItems}
                    mode='horizontal'
                    selectedKeys={[pathname]}
                />
            </div>
            <MoonOutlined style={{fontSize: 20}}/>
        </Flex>
    )
}

export default Navbar