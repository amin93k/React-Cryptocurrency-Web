import React from 'react'
import './App.css'
import { Navbar } from './components'
import { useRoutes } from 'react-router-dom'
import routes from './routes.jsx'
import { Layout, ConfigProvider } from 'antd'

function App() {
    const router = useRoutes(routes)
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
                    fontFamily: 'DM Sans'
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