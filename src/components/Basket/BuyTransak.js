import transakSDK from '@transak/transak-sdk'

export const BuyTransak = (address) => {
  let allChain = ''
  let allTokens = ''

  let transak = new transakSDK({
    apiKey: '25c9d559-fca5-4e08-8f62-5500e8c58a48',
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
    walletAddress: address,
    themeColor: '073DA5',
    email: '',
    hostURL: window.location.origin,
    widgetHeight: '550px',
    widgetWidth: '450px',
    defaultNetwork: 'bsc',
    defaultCryptoCurrency: 'bnb',
    networks: allChain,
    cryptoCurrencyList: allTokens,
  })
  transak.init()
}
