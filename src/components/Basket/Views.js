import { ConnectWallet } from './ConnectWallet'
import { Wallets } from './Wallets'

const Views = ({ handleChangeView, page }) => {
  return (
    <>
      {page.pay && (
        <div className='flex flex-wrap items-start justify-between gap-3 pt-10 sm:flex-nowrap md:gap-6 md:pt-20'>
          <button
            onClick={() => handleChangeView('getWallet')}
            className='flex h-12 w-2/4 cursor-pointer items-center justify-center rounded-full bg-gradient lg:h-16 lg:w-487 2xl:h-20 2xl:w-96'
          >
            <span className='font-poppins text-lg font-medium text-light-white sm:text-xl lg:text-3xl'>
              Pay by Wallet
            </span>
          </button>
          <button
            onClick={() => handleChangeView('connectWallet')}
            className='flex h-12 w-2/4 cursor-pointer items-center justify-center rounded-full bg-gradient lg:h-16 lg:w-487 2xl:h-20 2xl:w-96'
          >
            <span className='font-poppins text-lg font-medium text-light-white sm:text-xl lg:text-3xl'>
              Pay by Card
            </span>
          </button>
        </div>
      )}
      {page.getWallet && <Wallets handleChangeView={handleChangeView} />}
      {page.walletPay && <ConnectWallet />}
    </>
  )
}

export { Views }
