import React from 'react'
import './App.css'
import { Navbar } from './components'
import { useRoutes } from 'react-router-dom'
import routes from './routes.jsx'
import { Layout, ConfigProvider } from 'antd'
import { useSelector } from 'react-redux'

function App() {
    const router = useRoutes(routes)
    const isThemeDark = useSelector(state => state.theme.isThemeDark)
    const { Header, Content, Footer, Sider } = Layout;

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        headerBg: "#fff"
                    },
                },
                token: {
                    fontFamily: 'DM Sans',
                    colorPrimary: isThemeDark ? '#1890ff' : '#1DA57A',
                    colorBgBase: isThemeDark ? '#141414' : '#ffffff',
                    colorTextBase: isThemeDark ? '#ffffff' : '#000000'
                }
            }}
        >
            <Layout className='layout'>
                <Header >
                    <Navbar />
                </Header>

                <Content className='content'>
                    {router}
                </Content>

                <Footer>
                    footer
                </Footer>

            </Layout>
        </ConfigProvider>

    )
}

export default App