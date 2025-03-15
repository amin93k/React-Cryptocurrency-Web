import React from 'react'
import { Menu, Typography, Avatar, Flex } from "antd"
import { HomeOutlined, MoneyCollectOutlined, FundOutlined, BoldOutlined, MoonOutlined, SunOutlined, } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../redux/themeSlice'

function Navbar() {
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const isDarkTheme = useSelector(state => state.theme.isThemeDark)

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
                <Link >
                    Cryptocurrencies
                </Link>
        },
        {
            icon: <MoneyCollectOutlined />,
            key: '/exchanges',
            label:
                <Link >
                    Exchanges
                </Link>
        },
        {
            icon: <BoldOutlined />,
            key: '/news',
            label:
                <Link>
                    News
                </Link>
        },
    ]

    return (
        <Flex justify='space-between' >
            <div>
                <Link to='/'>
                    <Avatar src='/images/logo.png' size={{ sm: 0, md: 50, lg: 50, xl: 50 }} />
                    <Typography.Title
                        level={5}
                        style={{ display: "inline" }}
                    >
                        Crypto Land
                    </Typography.Title>
                </Link>
            </div>

            <div className='menu'>
                <Menu
                    items={menuItems}
                    mode='horizontal'
                    selectedKeys={[pathname]}
                />
            </div>

            <div onClick={() => dispatch(changeTheme())} style={{ cursor: 'pointer' }}>
                {isDarkTheme ?
                    <SunOutlined style={{ fontSize: 20 }} />
                    : <MoonOutlined style={{ fontSize: 20 }} />
                }
            </div>
        </Flex>
    )
}

export default Navbar