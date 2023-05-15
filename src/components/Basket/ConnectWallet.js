import { useSelector } from 'react-redux'
import { BuyWithTransak } from '../../api/transacAPI'

const ConnectWallet = () => {
  const { walletAddress } = useSelector((state) => state.walletInfo)
  const { totalPrice } = useSelector((state) => state.nfts)

  return (
    <div className='mt-9 flex flex-col items-center justify-center gap-5 rounded-3xl bg-deep-blue px-5 pb-8 pt-2 md:flex-row md:justify-between md:pt-4'>
      <div className='flex flex-col sm:w-487'>
        <span className='text-center font-poppins text-sm font-medium text-light-white md:text-left'>
          Your Wallet Address
        </span>
        <div className='m-auto pt-3 md:m-0'>
          <input
            disabled
            value={walletAddress}
            className='h-14 w-full rounded-md pl-6 font-poppins text-base font-medium text-light-grey placeholder:font-poppins placeholder:text-base placeholder:font-medium placeholder:text-light-grey lg:w-487  '
            placeholder='Wallet Address'
          />
        </div>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <button onClick={() => walletAddress ? BuyWithTransak(walletAddress, totalPrice, "USD") : null} className='flex h-8 w-64 cursor-pointer items-center justify-center rounded-full bg-gradient px-5 font-poppins text-xs font-semibold text-white sm:h-10 lg:w-289 lg:text-xl'>
          Pay
        </button>
      </div>
    </div>
  )
}

export { ConnectWallet }
