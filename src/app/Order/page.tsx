import React from 'react'
import Order from './Order'
import { TopicProvider } from '../TopicContext'

function page() {
  return (
    <div>
      <TopicProvider>
        <Order/>
      </TopicProvider>
    </div>
  )
}

export default page