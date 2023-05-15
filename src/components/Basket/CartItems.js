import { ReactComponent as ArrowButtonIcon } from '../../assets/icons/arrowBottom.svg'
import { ReactComponent as ArrowTopIcon } from '../../assets/icons/arrowTop.svg'
import TrashIcon from '../../assets/images/trash.png'
import { useDispatch, useSelector } from 'react-redux'

import { formatPipelineValue } from '../../helpers/formatPipelineValue'
import { useEffect } from 'react'
import { calculateTotals, decrease, increase, removeItem } from '../../redux/ShoppingCartSlice/ShoppingCart'

const CartItems = () => {
  const { nfts, totalPrice, amount } = useSelector((state) => state.nfts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [nfts])

  return (
    <div className='pt-5 md:pt-8'>
      <div className='flex flex-col gap-5 md:gap-10'>
        {!!nfts.length &&
          nfts.map((elem, idx) => {
            return (
              <div
                key={idx}
                className='shadowAround flex w-full flex-col items-center justify-center gap-8 rounded-md p-7 lg:flex-row lg:justify-between'
              >
                <div className='flex items-center gap-7'>
                  <div>
                    <img src={elem.image} alt='nft' className='h-20 md:h-auto md:max-h-32' />
                  </div>
                  <div className='flex flex-col gap-5'>
                    <span className='font-poppins text-base font-semibold text-bold-grey'>
                      {elem.name.toUpperCase()}
                    </span>
                    <span className='font-nunito text-sm text-bold-grey'>{elem.name}</span>
                  </div>
                </div>
                <div className='flex w-52 items-center justify-between sm:w-64'>
                  <div className='flex gap-3'>
                    <button className='font-raleway text-2xl font-semibold text-dark-grey'>
                      {elem.amount}
                    </button>
                    <div className='flex flex-col items-center justify-center gap-1'>
                      <button onClick={() => dispatch(increase({ id: elem.id }))} className='cursor-pointer'>
                        <ArrowTopIcon className='h-2 md:h-auto' />
                      </button>
                      <button onClick={() => dispatch(decrease({ id: elem.id }))} className='cursor-pointer'>
                        <ArrowButtonIcon className='h-2 md:h-auto' />
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className='font-poppins text-base font-medium text-dark-grey'>
                      ${formatPipelineValue(elem.id === 1  ?  elem.amount * 500 : elem.amount * 1000)} USD
                    </span>
                  </div>
                  <button onClick={() => dispatch(removeItem(elem.id))} className='cursor-pointer'>
                    <img src={TrashIcon} alt='' className='h-6 ' />
                  </button>
                </div>
              </div>
            )
          })}
      </div>
      <div className='flex items-center justify-between pl-3 pt-12'>
        <span className='font-poppins text-lg font-medium text-bold-grey sm:text-xl md:text-2xl lg:text-3xl'>
          Total to pay:
        </span>
        <button className='flex h-8 w-32 cursor-pointer items-center justify-end rounded-full bg-gradient pr-5 font-poppins text-lg font-medium text-white sm:w-40 sm:text-2xl md:h-16 md:w-60 lg:w-96 lg:text-4xl'>
          ${formatPipelineValue(totalPrice)}
        </button>
      </div>
    </div>
  )
}

export { CartItems }
