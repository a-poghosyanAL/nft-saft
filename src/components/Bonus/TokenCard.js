import React from 'react'
import ShadowBig from '../../assets/images/shadowBig.png'
import ShadowTop from '../../assets/images/shadowTop.png'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, removeItem } from '../../redux/ShoppingCartSlice/ShoppingCart'
import { formatPipelineValue } from '../../helpers/formatPipelineValue'
import { useNavigate } from 'react-router-dom'

const TokenCard = ({ token, withShadow }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleBuy = () => {}
  return (
    <div className='flex w-4/5 flex-col md:w-1/3 2xl:w-auto'>
      <div className='relative'>
        <div className='nd:w-87% relative z-10 w-4/5 rounded-xl border border-dark-blue p-2 pb-12 md:rounded-3xl lg:w-full 2xl:w-max'>
          <img src={token.image} alt='nft' className='rounded-xl backdrop-blur-xl md:rounded-3xl' />
          <div className='bg-opacity-15 absolute left-0 top-0 h-full w-full rounded-xl bg-toWhite shadow-lg blur md:rounded-3xl'></div>
          <div className='absolute left-28% top-36% z-50 m-auto flex flex-col'>
            <span className='text-2xl font-medium text-aqua md:text-4xl lg:text-5xl 2xl:text-6xl'>
              {token.price}
            </span>
            <span className='text-2xl font-medium text-white md:text-4xl lg:text-5xl 2xl:text-6xl'>
              {token.name}
            </span>
          </div>
        </div>
        <img src={ShadowBig} alt='shadow' className='absolute -right-7 top-19 w-full lg:right-97' />
        {withShadow ? (
          <img
            src={ShadowTop}
            alt='shadow'
            className='absolute left-51px top-68 w-full md:left-74'
          />
        ) : (
          <></>
        )}
      </div>
      <div>
        <div className='mt-10 border-b border-aqua p-3 text-center md:mt-14'>
          <span className='text-2xl font-extrabold text-white md:text-4xl lg:text-5xl 2xl:text-7xl'>
            ${formatPipelineValue(token.id === 1 ? token.amount * 500 : token.amount * 1000)} USD
          </span>
        </div>
        <div className='flex items-center justify-center gap-7 pt-8 lg:pt-14'>
          <button
            onClick={() => {
              dispatch(decrease({ id: token.id }))
            }}
            className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-white md:h-10 md:w-10 md:rounded-xl lg:h-12 lg:w-12 2xl:h-14 2xl:w-14'
          >
            <MinusIcon className='max-h-8 2xl:max-h-10' />
          </button>
          <div className='relative h-max w-max'>
            <button className='absolute z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gradient md:h-12 md:w-12 lg:h-14 lg:w-14 2xl:h-16 2xl:w-16'>
              <span className='text-2xl font-semibold text-white 2xl:text-4xl'>{token.amount}</span>
            </button>
            <div className='h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 2xl:h-16 2xl:w-16'></div>
            <div className='absolute left-1 top-1 h-full w-full rounded-xl bg-white'></div>
          </div>
          <button
            onClick={() => dispatch(increase({ id: token.id }))}
            className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-white md:h-10 md:w-10 md:rounded-xl lg:h-12 lg:w-12 2xl:h-14 2xl:w-14'
          >
            <PlusIcon className='max-h-8 2xl:max-h-10' />
          </button>
        </div>
        <div className='mt-8 flex items-center justify-center md:pt-12 2xl:pt-16'>
          <button
            onClick={() => navigate('/shopping-cart')}
            className='flex h-12 w-2/4 cursor-pointer items-center justify-center rounded-full bg-gradient lg:h-16 lg:w-487 2xl:h-20 2xl:w-96'
          >
            <span className='text-xl font-medium text-white 2xl:text-3xl'>BUY NOW</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TokenCard
