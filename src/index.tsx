import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const Card = styled.div`
  max-width: 335px;
  width: 100%;
  padding: 24px 0px 40px;
  background: #FFFFFF;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  font-family: 'Roboto', sans-serif;
`
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 21px;
`
const FormRow = styled.div`
  padding: 0 24px;
  font-size: 16px;
  line-height: 19px;
`
const RowLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
  input {
    width: 24px;
    height: 24px;
    margin: 0;
    cursor: pointer;
  }
`
const Weight = styled.span<{ selected: boolean }>`
  margin-left: 16px;
  color: ${props => props.selected ? '#000000' : '#999999'};
`
const Price = styled.span<{ selected: boolean }>`
  margin-left: auto;
  color: ${props => props.selected ? '#000000' : '#999999'};
`
const CurrentPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 49px;
  margin-top: 20px;
`
const CurrentPrice = styled.div`
  font-size: 24px;
  line-height: 28px;
`
const AddToCartBtn = styled.button`
  display: flex;
  align-items: center;
  background: #6CA22C;
  border-radius: 8px;
  padding: 16px;
  border: transparent;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
`

type Params = {
  weight: number
  price: number
}
type Props = {
  cardData: Params[]
  onSubmit: (value: number) => void
}

const TestApp: React.FC<Props> = ({cardData, onSubmit}) => {
  const [state, setState] = useState({ selectedOption: 0 })

  useEffect(() => {
    setState({ selectedOption: cardData[0].weight })
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSubmit(state.selectedOption)
  }

  const handleOptionChange = (e: any) => {
    setState({ selectedOption: e.target.value })
  }

  return (
    <Card>
      <CardHeader>
        <span>Тип</span>
        <span>Цена</span>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        {
          cardData.map(elem => (
            <FormRow key={elem.weight}>
              <RowLabel>
                <input type="radio" value={elem.weight} checked={state.selectedOption == elem.weight} onChange={e => handleOptionChange(e)} />
                <Weight selected={state.selectedOption == elem.weight}>{elem.weight} г</Weight>
                <Price selected={state.selectedOption == elem.weight}>{elem.price} грн</Price>
              </RowLabel>
            </FormRow>
          ))
        }
        <CurrentPriceContainer>
          <CurrentPrice>{state.selectedOption} грн</CurrentPrice>
          <AddToCartBtn type="submit">
            <svg width="24" height="24" style={{marginRight: '8px'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.73254 15.5158H7.73364C7.73456 15.5158 7.73547 15.5156 7.73639 15.5156H20.4844C20.7982 15.5156 21.0742 15.3074 21.1604 15.0057L23.9729 5.16193C24.0335 4.94971 23.991 4.72156 23.8583 4.54541C23.7253 4.36926 23.5175 4.26562 23.2969 4.26562H6.11096L5.60834 2.00372C5.53674 1.68201 5.25146 1.45312 4.92188 1.45312H0.703125C0.314758 1.45312 0 1.76788 0 2.15625C0 2.54462 0.314758 2.85937 0.703125 2.85937H4.35791C4.4469 3.26019 6.76318 13.6837 6.89648 14.2833C6.14923 14.6082 5.625 15.3532 5.625 16.2187C5.625 17.3818 6.57129 18.3281 7.73438 18.3281H20.4844C20.8727 18.3281 21.1875 18.0134 21.1875 17.625C21.1875 17.2366 20.8727 16.9219 20.4844 16.9219H7.73438C7.34674 16.9219 7.03125 16.6064 7.03125 16.2187C7.03125 15.8317 7.34564 15.5167 7.73254 15.5158ZM22.3647 5.67187L19.9539 14.1094H8.29834L6.42334 5.67187H22.3647Z" fill="white" />
              <path d="M7.03123 20.4375C7.03123 21.6006 7.97752 22.5469 9.14061 22.5469C10.3037 22.5469 11.25 21.6006 11.25 20.4375C11.25 19.2744 10.3037 18.3281 9.14061 18.3281C7.97752 18.3281 7.03123 19.2744 7.03123 20.4375ZM9.14061 19.7344C9.52824 19.7344 9.84373 20.0499 9.84373 20.4375C9.84373 20.8251 9.52824 21.1406 9.14061 21.1406C8.75298 21.1406 8.43748 20.8251 8.43748 20.4375C8.43748 20.0499 8.75298 19.7344 9.14061 19.7344Z" fill="white" />
              <path d="M16.9688 20.4375C16.9688 21.6006 17.915 22.5469 19.0781 22.5469C20.2412 22.5469 21.1875 21.6006 21.1875 20.4375C21.1875 19.2744 20.2412 18.3281 19.0781 18.3281C17.915 18.3281 16.9688 19.2744 16.9688 20.4375ZM19.0781 19.7344C19.4658 19.7344 19.7812 20.0499 19.7812 20.4375C19.7812 20.8251 19.4658 21.1406 19.0781 21.1406C18.6905 21.1406 18.375 20.8251 18.375 20.4375C18.375 20.0499 18.6905 19.7344 19.0781 19.7344Z" fill="white" />
            </svg>
            До кошика
          </AddToCartBtn>
        </CurrentPriceContainer>
      </form>
    </Card>
  )
}

export default TestApp
