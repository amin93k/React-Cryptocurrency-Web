import React from 'react'
import { Avatar, Col, Flex, Row, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptoQuery } from '../../services/cryptoApi'
import convertTimestamp from '../../utils/convertTimestamp'
import { useSelector } from 'react-redux'

const { Title, Text, Paragraph } = Typography

function LastNews() {
    const url = "v2/news/"

    const { data: newsesData, error, isLoading } = useGetCryptoQuery({ url })
    console.log(newsesData)
    const isThemeDark = useSelector(state => state.theme.isThemeDark)

    return (
        <div>
            <Flex align='center' justify='space-between' style={{ marginBottom: 20, marginTop: 80 }}>
                <Title level={2}>
                    Latest News
                </Title>
                <Link to='/news' className='link'>
                    See All News
                </Link>
            </Flex>

            <Row gutter={[20, 24]}>
                {newsesData?.Data?.slice(0, 4).map(news => {
                    const sourceInfo = news.source_info

                    return (
                        <Col sx={24} lg={12} key={news.id}>
                            <Flex
                                className='news-card'
                                gap={8}
                                style={{backgroundColor: isThemeDark ? '#0d032b' : '#FCFCFD'}}
                            >
                                <div className='news-card__cover'>
                                    <img src={news.imageurl} alt="" className='news-card__cover--img' />
                                </div>

                                <Flex className='news-card__content' vertical>
                                    <a href={news.guid} target='_black'>
                                        <Title
                                            level={4}
                                            ellipsis={{ rows: 2 }}
                                        >
                                            {news.title}
                                        </Title>
                                    </a>
                                    <Paragraph
                                        className='news-card__content--description'
                                        ellipsis={{ rows: 2 }}
                                    >
                                        {news.body}
                                    </Paragraph>
                                    <Flex
                                        className='news-card__content--source'
                                        align='center'
                                        justify='space-between'
                                    >
                                        <Space>
                                            <Avatar src={sourceInfo.img} alt={sourceInfo.name} />
                                            <span>{sourceInfo.name}</span>
                                        </Space>
                                        <Text className='news-card__content--time'>
                                            {convertTimestamp(news.published_on, 'news')}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Col>)

                })}
            </Row>

        </div>
    )
}

export default LastNews