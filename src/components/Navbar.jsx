import React from 'react'
import { Menu, Button, Typography, Avatar } from "antd"
import { MenuOutlined, HomeOutlined, MoneyCollectOutlined, FundOutlined, BulbOutlined, BoldOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function Navbar() {
    const menuItems = [
        {
            icon: <HomeOutlined />,
            key: 'home',
            label:
                <Link to='/'>
                    Home
                </Link>
        },
        {
            icon: <FundOutlined />,
            key: 'cryptocurrencies',
            label:
                <Link to='/cryptocurrencies'>
                    Cryptocurrencies
                </Link>
        },
        {
            icon: <MoneyCollectOutlined />,
            key: 'exchanges',
            label:
                <Link to='/exchanges'>
                    Exchanges
                </Link>
        },
        {
            icon: <BoldOutlined />,
            key: 'news',
            label:
                <Link to='/news'>
                    News
                </Link>
        },
    ]

    return (
        <>
            <div>
                <Avatar src='./src/images/logo.png' size={50} />
                <Typography.Title level={2}>
                    <Link to='/'>
                        Crypto Land
                    </Link>
                </Typography.Title>
            </div>
            <div>
                <Menu
                    theme='dark'
                    items={menuItems}
                    mode='inline'
                    selectedKeys={["home"]}
                />


            </div>
        </>
    )
}

export default Navbar