import * as React from 'react'
import TestApp from './'

const cardData = [
  { weight: 500, price: 500 },
  { weight: 100, price: 150 },
  { weight: 50, price: 90 }
]

const handleSubmit = (value: number) => {
  console.log(value)
}

export const Regular: React.FC = () => (
  <TestApp cardData={cardData} onSubmit={handleSubmit}/>
)



export default {
  title: 'Common/TestApp',
}
