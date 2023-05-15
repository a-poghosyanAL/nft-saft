import AmericanExpress from '../../assets/images/american-express.png'
import Fromotic from '../../assets/images/fromotic.png'
import Metamask from '../../assets/images/metamask.png'
import Visa from '../../assets/images/visa.png'
import Wallet from '../../assets/images/wallet.png'
import WalletConnect from '../../assets/images/walletconnect.png'
import TrustWallet from '../../assets/images/trustwallet.png'
import MasterCard from '../../assets/images/mastercard.png'
import LiquitWallet from '../../assets/images/liquitWallet.png'

const WalletImages = () => {
  return (
    <div className='mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 gap-x-9 gap-y-5 px-4 md:pt-12 lg:max-w-6xl lg:pt-12 xl:pt-16 2xl:grid 2xl:max-w-full 2xl:grid-cols-5'>
      <button className='flex cursor-pointer items-center justify-center'>
        <img src={LiquitWallet} alt='wallet' />
      </button>
      <button className='flex cursor-pointer items-center justify-center'>
        <img src={Metamask} alt='wallet' />
      </button>
      <button className='flex cursor-pointer items-center justify-center'>
        <img src={TrustWallet} alt='wallet' />
      </button>
      <button className='flex cursor-pointer items-center justify-center'>
        <img src={Visa} alt='wallet' />
      </button>
      <button className='row-span-2 flex cursor-pointer items-center justify-center'>
        <img src={MasterCard} alt='wallet' />
      </button>
      <button className='flex cursor-pointer items-center justify-center'>
        <img src={Wallet} alt='wallet' />
      </button>
      <button className='flex cursor-pointer items-center justify-center'>
        <img src={WalletConnect} alt='wallet' />
      </button>
      <button className='flex cursor-pointer items-center justify-center'>
        <img src={Fromotic} alt='wallet' />
      </button>
      <button className='flex cursor-pointer items-center justify-center'>
        <img src={AmericanExpress} alt='wallet' />
      </button>
    </div>
  )
}

export { WalletImages }
