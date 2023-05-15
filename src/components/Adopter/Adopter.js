import { sellingData } from '../../utils/constants'

const Adopter = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      <div className='flex flex-col items-center'>
        <div className='px-3 pt-32 text-center md:px-0 md:pt-40 2xl:pt-278'>
          <span className='text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl 2xl:text-100'>
            Early Adopter{' '}
          </span>
          <span className='title-gradient bg-aquaGraditent text-center text-2xl font-semibold md:text-4xl lg:text-7xl 2xl:text-100'>
            NFT Pre-sale
          </span>
        </div>
        <div className='px-3 pt-6 text-center md:px-32 2xl:px-290'>
          <span className='text-center text-base text-white md:text-xl lg:text-2xl 2xl:text-4xl'>
            Become an early adopter with Liquid, we have a limited number of NFT’s available to our
            community members. Choose one of our two wNFT's and receive exclusive early member
            rewards.
          </span>
        </div>
        <div className='pt-10 lg:pt-20'>
          <div className='text-center'>
            <span className='title-gradient bg-aquaGraditent text-lg font-bold md:text-2xl lg:text-3xl 2xl:text-44'>
              HURRY! SELLING FAST.
            </span>
          </div>
          <div className='flex flex-wrap justify-center gap-9 pt-10 lg:pt-24'>
            {sellingData.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className='relative flex h-28 w-80 items-center justify-center bg-parallelogram bg-centerRight bg-bigBottom bg-no-repeat md:h-44 md:bg-coverContain 2xl:h-200 2xl:w-487'
                >
                  <span className='absolute -top-2 left-9 h-max text-base font-bold text-white md:top-7 md:text-xl 2xl:text-3xl'>
                    ${elem.sollary} USD
                  </span>
                  <span className='title-gradient h-max bg-aquaGraditent text-2xl font-medium md:text-4xl 2xl:text-7xl'>
                    {elem.sollary}
                  </span>
                  <div className='absolute bottom-0 right-5 flex flex-col md:right-10'>
                    <span className='text-base font-bold italic text-white md:text-xl'>
                      Buy Now!
                    </span>
                    <span className='text-sm font-bold italic text-white md:text-lg'>Limited</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Adopter }
