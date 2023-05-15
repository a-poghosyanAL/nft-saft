import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { CartItems } from './CartItems'
import { RampForm } from './RampForm'
import { Views } from './Views'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {
  const navigate = useNavigate()
  const { nfts } = useSelector((state) => state.nfts)

  const [page, setPage] = useState({
    getWallet: false,
    pay: true,
    connectWallet: false,
    walletPay: false,
  })

  const handleChangeView = (type) => {
    setPage((prev) => {
      return {
        ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
        [type]: true,
      }
    })
  }

  return (
    <div
      className={`mx-auto flex ${
        page.connectWallet ? 'max-w-1600' : 'max-w-1000'
      } flex-wrap gap-10 rounded-3xl bg-white py-7 pl-7 pr-7 sm:py-10 md:gap-24 md:pr-16 lg:py-16 2xl:flex-nowrap`}
    >
      <div className='w-full 2xl:max-w-1000'>
        <div className='flex items-center gap-2 border-b border-light-grey pb-4 md:pb-7'>
          <button onClick={() => navigate('/')}>
            <ChevronLeftIcon className='h-7 w-7 text-bold-grey' />
          </button>
          <span className='font-poppins text-sm font-semibold text-bold-grey md:text-lg'>
            Shopping Continue
          </span>
        </div>
        <div className='flex flex-col pt-4 md:pt-7'>
          <span className='text-xl font-medium leading-10 text-bold-grey sm:text-2xl lg:text-3xl'>
            Shopping cart
          </span>
          <span className='font-nunito text-base font-medium'>
            You have {nfts.length} {nfts.length <= 1 ? 'item' : 'items'} in your cart
          </span>
        </div>
        <CartItems />
        <Views handleChangeView={handleChangeView} page={page} />
      </div>
      {page.connectWallet && <RampForm />}
    </div>
  )
}

export { Cart }
