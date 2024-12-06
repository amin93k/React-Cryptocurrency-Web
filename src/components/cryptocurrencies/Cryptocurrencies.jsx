import React from 'react'
import { Input, Space } from 'antd';
const { Search } = Input;

function Cryptocurrencies() {
  const onSearch = (value, _e, info) => console.log(info?.source, value)

  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </div>
  )
}

export default Cryptocurrencies