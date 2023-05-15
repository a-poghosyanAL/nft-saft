import NftImg from '../../assets/images/Nft.png'

const Confirmed = () => {
  return (
    <div className='mx-auto max-w-xl rounded-3xl bg-deep-blue px-5 pb-10 pt-10 sm:px-11 md:pb-20 md:pt-14'>
      <div className='filterBlur relative'>
        <img src={NftImg} alt='nft' className='h-full w-full max-w-170 sm:max-h-80 sm:max-w-xs' />
      </div>
      <div className='flex flex-col gap-2 pt-7 md:pt-14'>
        <span className='font-poppins text-lg font-semibold text-light-white md:text-2xl lg:text-3xl'>
          Thank you for you purchase. Your NFT will be delivered to your wallet shortly.
        </span>
        <span className='font-poppins text-sm font-light text-light-white md:text-lg lg:text-xl'>
          We will deliver your SAFT via email. Please enter your preferred email address below.
        </span>
        <div className='border-b border-light-purple pb-8 pt-6'>
          <input
            className='h-14 w-full rounded-md pl-6 font-poppins text-sm font-medium text-light-grey placeholder:font-poppins placeholder:text-sm placeholder:font-medium placeholder:text-light-grey sm:text-base sm:placeholder:text-base md:h-16'
            placeholder='Enter you email address'
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='mt-10 flex h-12 w-72 cursor-pointer items-center justify-center rounded-full bg-gradient px-5 font-poppins text-sm font-semibold text-white sm:w-80 sm:text-base'>
          Sumbit
        </button>
      </div>
    </div>
  )
}

export { Confirmed }
