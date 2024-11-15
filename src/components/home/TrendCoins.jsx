import { Typography, Flex } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import CoinsTable from '../CoinsTable'

function TrendCoinsTable({ coins }) {

    return (
        <div>
            <Flex align='center' justify='space-between' style={{ marginBottom: 0, marginTop: 80 }}>
                <Typography.Title level={2}>
                    Market Trend
                </Typography.Title>
                <Link to='/cryptocurrencies' className='link'>
                    See All Cryptocurrencies
                </Link>
            </Flex>

            <CoinsTable coins={coins}/>
        </div>
    )
}

export default TrendCoinsTable