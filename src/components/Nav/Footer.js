import { footerLinks, socialLinks } from '../../utils/constants'

export const Footer = () => {
  return (
    <div className='font-dmsans w-full bg-deep-dark-blue px-10 pb-2 pt-8 md:px-20 lg:px-32 xl:px-48'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {footerLinks.map((elem, key) => {
          return (
            <div key={key}>
              <div className='my-4 text-xl font-bold text-gray-200'>{elem.title}</div>
              {elem.categories.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href='https://docs.liquid-crypto.io/product-docs/important-docs/terms-and-conditions'
                    target='_blank'
                    rel='noreferrer'
                    className='block text-gray-200'
                  >
                    {item}
                  </a>
                )
              })}
            </div>
          )
        })}
        <div>
          <div className='my-4 text-xl font-bold text-gray-200'>Follow Us</div>
          <div className='-ml-3 flex'>
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className='mx-1 block cursor-pointer'
              >
                <img src={item.image} width={'32px'} height={'32px'} alt=''></img>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-8 border-t mb-4 border-gray-300 pt-2 text-center text-gray-200'>
        <span>&#169; Copyright 2022, All Rights Reserved by</span>
        <span className='ml-1 border-b border-gray-300 font-bold'>Liquid Crypto</span>
      </div>
    </div>
  )
}
