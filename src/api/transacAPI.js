import { TRANSAK_URL } from './constant'
import transakSDK from '@transak/transak-sdk'
import axios from 'axios'

export const getFiatCurrencies = () => {
  return axios.get(`${TRANSAK_URL}/currencies/fiat-currencies`, {
    headers: {
      accept: 'application/json',
    },
    params: {
      'api-key': '25c9d559-fca5-4e08-8f62-5500e8c58a48',
    },
  })
}

export const BuyWithTransak = (address, totalPrice, fiatAmount) => {
  const transak = new transakSDK({
    apiKey: process.env.REACT_APP_TRANSAC_API_KEY, // ( )
    environment: 'PRODUCTION', // ( )
    themeColor: '000000', // App theme color
    hostURL: window.location.origin,
    widgetHeight: '700px',
    widgetWidth: '500px',
    walletAddress: address,
    fiatCurrency: fiatAmount,
    fiatAmount: totalPrice,
  })
  transak.init()
  transak.on(transak.ALL_EVENTS, (data) => {
  })

  transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (eventData) => {
    transak.close()
  })

  transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
    window.alert('Payment Success')
    transak.close()
  })
}
