import { WalletImages } from './WalletImages'
import {  useSelector } from 'react-redux'

import { NFTTokens } from '../../helpers/tokensData'
import TokenCard from './TokenCard'

const Bonus = () => {
  const { nfts } = useSelector((state) => state.nfts)

  return (
    <div className='flex flex-col gap-20 lg:gap-36'>
      <div className='flex flex-wrap justify-center'>
        <div className='flex flex-col flex-wrap items-center justify-center gap-36 md:flex-row'>
          {nfts.length > 1
            ? nfts.map((token) => {
                return <TokenCard key={token.id} token={token} withShadow={token.id === 1} />
              })
            : NFTTokens.map((token) => {
                return <TokenCard key={token.id} token={token} withShadow={token.id === 1} />
              })}
        </div>
      </div>
      <div className='mx-auto flex flex-col items-center justify-center gap-7'>
        <div className='flex w-full flex-col items-center justify-between gap-7 pb-3 md:flex-row'>
          <span className='text-xl font-extrabold text-white md:text-3xl lg:text-4xl 2xl:text-44'>
            Total Number of Tokens :
          </span>
          <input className='outline-none h-12 w-72 rounded-lg bg-gradient pl-5 text-2xl text-white 2xl:h-14 2xl:w-96' />
        </div>
        <div className='flex w-full flex-col items-center justify-between gap-7 md:flex-row'>
          <span className='text-xl font-extrabold text-white md:text-3xl lg:text-4xl 2xl:text-44'>
            Total Investment :
          </span>
          <input className='outline-none h-12 w-72 rounded-lg bg-gradient pl-5 text-2xl text-white 2xl:h-14 2xl:w-96' />
        </div>
      </div>
      <WalletImages />
    </div>
  )
}

export { Bonus }
