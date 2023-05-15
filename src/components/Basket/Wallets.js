import { useEffect, useState } from 'react'

import { useWeb3React } from '@web3-react/core'
import { walletIcons } from '../../Wallets/connector'
import { useDispatch } from 'react-redux'
import { getNftAddress } from '../../redux/WalletSlice/WalletInfo'
import { saveAccount } from '../../helpers/account'

const Wallets = ({ handleChangeView }) => {
  const [walletType, setWalletType] = useState(walletIcons[0])
  const dispatch = useDispatch()
  const { account, activate } = useWeb3React()

  useEffect(() => {
    if(account) {
      dispatch(getNftAddress(account))
      saveAccount(account)
      handleChangeView('walletPay')
    }
  },[account])

  const walletConnectHandler = async () => {
    activate(walletType.connector)
    // handleChangeView('walletPay')
  }
  
  return (
    <div className='mt-9 flex flex-col items-center justify-center gap-5 rounded-3xl bg-deep-blue px-5 pb-8 pt-2 md:flex-row md:justify-between md:pt-4'>
      <div className='flex flex-col'>
        <span className='text-center font-poppins text-2xl font-semibold text-light-white md:text-left'>
          Wallet
        </span>
        <div className='grid grid-cols-3 items-center gap-2 pt-3 sm:flex sm:gap-1'>
          {walletIcons.map((item) => (
            <button
              className={`${walletType.name !== item.name ? 'opacity-10' : ''} cursor-pointer`}
              key={item.id}
              onClick={() => setWalletType(item)}
            >
              <img src={item.src} alt='wallet' className='min-w-35' />
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={walletConnectHandler}
        className='flex h-8 w-56 cursor-pointer items-center justify-center rounded-full bg-gradient px-5 font-poppins text-base font-medium text-white sm:h-16 sm:w-72 sm:text-xl lg:w-96'
      >
        Connect Wallet
      </button>
    </div>
  )
}

export { Wallets }
