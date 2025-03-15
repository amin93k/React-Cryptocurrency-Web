import React from 'react'
import './App.css'
import { Navbar } from './components'
import { useRoutes } from 'react-router-dom'
import routes from './routes.jsx'
import { Layout, ConfigProvider } from 'antd'
import { useSelector } from 'react-redux'
import FooterCom from './components/FooterCom.jsx'
import { Grid } from 'antd'

const { useBreakpoint } = Grid
const { Header, Content, Footer } = Layout;

function App() {
    const router = useRoutes(routes)
    const isThemeDark = useSelector(state => state.theme.isThemeDark)
    const {xs: isMobile} = useBreakpoint()

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        headerBg: isThemeDark ? '#0d032b' : '#fcfcfd', 
                        headerPadding: "0 15px",
                        footerPadding: "20px 30px"
                    }
                },
                token: {
                    fontFamily: 'DM Sans',
                    colorBgBase: isThemeDark ? '#0d032b' : '#FCFCFD',
                    colorTextBase: isThemeDark ? '#ffffff' : '#000000'
                }
            }}
        >
            <Layout className='layout'>
                <Header >
                    <Navbar />
                </Header>

                <Content style={{padding: isMobile ? "16px 16px" : "16px 50px"}}>
                    {router}
                </Content>

                <Footer>
                    <FooterCom />
                </Footer>

            </Layout>
        </ConfigProvider>

    )
}

export default App