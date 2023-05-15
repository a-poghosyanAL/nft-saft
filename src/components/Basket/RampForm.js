import { useEffect, useState } from 'react'
// import CardImg from '../../assets/images/cardImage.png'
import RightIcon from '../../assets/icons/Right.png'
// import { cardTypes } from '../../utils/constants'
// import SeeAll from '../../assets/images/seeAll.png'
import { useSelector } from 'react-redux'
import { formatPipelineValue } from '../../helpers/formatPipelineValue'
import transakSDK from '@transak/transak-sdk'
// import { useWeb3React } from '@web3-react/core'
import { getFiatCurrencies } from '../../api/transacAPI'

const RampForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // const [cardholderName, setCardholderName] = useState('')
  const [cardComplete, setCardComplete] = useState(false)
  // const [expiry, setExpiry] = useState({ error: '', date: '' })
  // const [cardNumber, setCardNumber] = useState('')
  const { totalPrice } = useSelector((state) => state.nfts)
  // const { account } = useWeb3React()
 
 
  const handleSubmit = async (event) => {
    event.preventDefault()
    const transak = new transakSDK({
      apiKey: process.env.REACT_APP_TRANSAC_API_KEY, // ( )
      environment: 'PRODUCTION', // ( )
      themeColor: '000000', // App theme color
      hostURL: window.location.origin,
      widgetHeight: '700px',
      widgetWidth: '500px',
      fiatCurrency: 'USD',
      fiatAmount : totalPrice
    })
    transak.init()
    transak.on(transak.ALL_EVENTS, (data) => {})

    transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (eventData) => {
      transak.close()
    })

    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      window.alert('Payment Success')
      transak.close()
    })

    // try {
    //   const response = await fetch(process.env.REACT_APP_RAMP_URL + 'v1/payments', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Api-Key': 'nav86e2oq98qdwvwatedmzadope6ggr3bodhxz75',
    //       Authorization: 'Bearer nav86e2oq98qdwvwatedmzadope6ggr3bodhxz75',
    //     },
    //     body: JSON.stringify({
    //       amount: 2000,
    //       currency: 'USD',
    //       framework: 'react',
    //       cardNumber: event.target.elements.cardNumber.value,
    //       expiryDate: event.target.elements.cardExpiry.value,
    //       cvc: event.target.elements.cardCvc.value,
    //     }),
    //   })

    //   if (!response.ok) {
    //     const errorData = await response.json()
    //     setError(errorData.error_description)
    //   } else {
    //     console.log('Payment successful!')
    //   }
    // } catch (error) {
    //   setError(error.message)
    // }
    setLoading(false)
  }

  // const handleCardChange = (event) => {
  //   setCardComplete(event.complete)
  // }

  // const handleCardNumberChange = (e) => {
  //   const val = e.target.value.replace(/\s+/g, '').slice(0, 16)

  //   if (val.length % 4 === 0 && val.length > 0) {
  //     e.target.value = val.match(/.{1,4}/g).join(' ')
  //   }

  //   setCardNumber(e.target.value)
  // }

  // const handleExpiryChange = (event) => {
  //   const { value } = event.target
  //   const formattedValue = value
  //     .replace(/\D/g, '')
  //     .slice(0, 4)
  //     .replace(/(\d{2})(\d)/, '$1/$2')
  //   setExpiry({ date: formattedValue, error: '' })
  //   if (value.length <= 5) {
  //     const [month, year] = formattedValue.split('/')
  //     const isExpired = isPastDate(new Date(Number(`20${year}`), Number(month) - 1))
  //     setExpiry((prev) => {
  //       return { ...prev, error: isExpired ? 'Card has expired' : null }
  //     })
  //   } else {
  //     setExpiry((prev) => {
  //       return { ...prev, date: '' }
  //     })
  //   }
  // }

  // const isPastDate = (date) => {
  //   const today = new Date()
  //   return date < new Date(today.getFullYear(), today.getMonth())
  // }

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-au mx-auto h-max w-full max-w-547 rounded-2xl bg-deep-blue px-5 pb-12 pt-7 md:px-7'
    >
      {/* <div>
        <div className='flex justify-between'>
          <span className='mb-2 block font-bold text-white'>Card Details</span>
          <img alt='card' src={CardImg} className='rounded-lg' />
        </div>
        <div>
          <span className='font-nunito text-base font-semibold text-light-white'>Card type</span>
          <div className='grid max-w-350 grid-cols-2 gap-2 pt-3 sm:flex sm:max-w-none sm:gap-6 md:pt-5'>
            {cardTypes.map((elem, idx) => {
              return (
                <button type='button' key={idx} className='cursor-pointer'>
                  <img src={elem} alt='cardType' />
                </button>
              )
            })}
            <button
              type='button'
              className='relative flex h-max w-max cursor-pointer items-center justify-center'
            >
              <img src={SeeAll} alt='See All' className='h-full w-full' />
              <span className='absolute text-base font-bold text-light-white'>See all</span>
            </button>
          </div>
        </div>
        <div className='mb-5'>
          <label htmlFor='cardholder-name' className='mb-2 mt-9 block font-medium text-light-white'>
            Name on card
          </label>
          <input
            id='cardholder-name'
            type='text'
            placeholder='Name'
            className='h-10 w-full rounded border border-gray-300 p-2 pl-6 md:h-14'
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
        </div>
      </div>
      <div className='mb-5'>
        <label htmlFor='card-number' className='mb-2 block font-medium text-light-white'>
          Card Number
        </label>
        <input
          id='card-number'
          name='cardNumber'
          type='text'
          value={cardNumber}
          placeholder='Card Number'
          className='h-10 w-full rounded border border-gray-300 bg-white p-2 pl-6 md:h-14'
          onChange={handleCardNumberChange}
        />
      </div>
      <div className='mb-5 flex grid-cols-2 flex-col gap-4 sm:grid '>
        <div>
          <label htmlFor='card-expiry' className='mb-2 block font-medium text-light-white'>
            Expiration date
          </label>
          <input
            id='card-expiry'
            name='cardExpiry'
            type='text'
            maxLength='5'
            pattern='\d\d/\d\d'
            placeholder='MM/YY'
            value={expiry.date}
            className='h-10 w-full rounded border border-gray-300 bg-white p-2 pl-6 md:h-14'
            onChange={handleExpiryChange}
          />
        </div>
        <div>
          <label htmlFor='card-cvc' className='mb-2 block font-medium text-light-white'>
            CVV
          </label>
          <input
            id='card-cvc'
            name='cardCvc'
            type='text'
            placeholder='CVV'
            maxLength='3'
            className='h-10 w-full rounded border border-gray-300 bg-white p-2 pl-6 md:h-14'
            onChange={handleCardChange}
          />
        </div>
      </div> */}
      <div className='border-b border-light-purple pb-4'></div>
      <div className='flex flex-col gap-2 pt-3 md:pt-5 '>
        <div className='flex justify-between'>
          <span className='font-poppins text-sm font-medium text-light-white'>Subtotal</span>
          <span className='font-poppins text-sm font-medium text-light-white'>
            $ {formatPipelineValue(totalPrice)}
          </span>
        </div>
        <div className='flex justify-between'>
          <span className='font-poppins text-sm font-medium text-light-white'>
            Total (Tax incl.)
          </span>
          <span className='font-poppins text-sm font-medium text-light-white'>
            $ {formatPipelineValue(totalPrice)}
          </span>
        </div>
      </div>
      <div className='mt-5'>
        {error && <div className='text-red-500'>{error}</div>}
        <div
          className='mt-1 w-full cursor-pointer rounded-full bg-gradient px-4 py-2 font-bold text-light-white disabled:opacity-50'
          disabled={loading || !cardComplete}
        >
          {loading ? (
            <div className='flex items-center justify-center'>
              <span className='font-poppins text-sm font-medium text-light-white md:text-xl'>
                Loading...
              </span>
            </div>
          ) : (
            <button type='submit' className='flex w-full items-center justify-between'>
              <span className='font-poppins text-sm font-bold text-light-white md:text-xl'>
                $ {formatPipelineValue(totalPrice)}
              </span>
              <div className='flex items-center gap-2'>
                <span className='font-poppins text-sm font-medium text-light-white md:text-xl'>
                  Confirm
                </span>
                <img src={RightIcon} alt='Arrow right' className='w-5 md:w-auto' />
              </div>
            </button>
          )}
        </div>
      </div>
    </form>
  )
}

export { RampForm }
