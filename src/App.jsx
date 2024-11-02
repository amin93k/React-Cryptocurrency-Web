import React from 'react'
import './App.css'
import { Navbar } from './components'
import { useRoutes } from 'react-router-dom'
import routes from './routes.jsx'
import { Layout } from 'antd'

function App() {
    const router = useRoutes(routes)
    const { Header, Content, Footer, Sider } = Layout;

    return (
        <Layout className='layout'>
            <Sider >
                <Navbar />
            </Sider>
            
            <Layout>
                <Content>
                    {router}
                </Content>

                <Footer>
                    footer
                </Footer>
            </Layout>
        </Layout>
    )
}

export default App