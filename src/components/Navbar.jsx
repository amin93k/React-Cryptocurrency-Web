import React from 'react'
import { Menu, Button, Typography, Avatar } from "antd"
import { MenuOutlined, HomeOutlined, MoneyCollectOutlined, FundOutlined, BulbOutlined, BoldOutlined } from '@ant-design/icons'
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
        <>
            <div style={{marginTop: 5}}>
                <Link to='/'>
                    <Avatar src='./src/images/logo.png' size={50} />
                    <Typography.Title 
                    level={5}
                        style={{color: "white", display: "inline"}}
                        >
                        Crypto Land
                    </Typography.Title>
                </Link>
            </div>
            <div>
                <Menu
                    theme='dark'
                    items={menuItems}
                    mode='inline'
                    selectedKeys={[pathname]}
                />


            </div>
        </>
    )
}

export default Navbar