import { Disclosure } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { navigation } from '../../utils/constants'
import { ReactComponent as ShoppingCart } from '../../assets/icons/shoppingcart.svg'

const Navbar = ({ scrollDirection }) => {
  const navigate = useNavigate()

  return (
    <Disclosure as='nav' className={`w-full bg-deep-blue ${scrollDirection ? '' : 'fixed'} z-100`}>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                <Disclosure.Button className='focus:outline-none inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-between'>
                <div className='ml-8% flex flex-shrink-0 items-center md:ml-0'>
                  <button onClick={() => navigate('/')}>
                    <img className='block h-12 w-auto md:hidden' src={Logo} alt='LIQUID' />
                  </button>
                  <button onClick={() => navigate('/')}>
                    <img className='hidden h-16 w-auto md:block' src={Logo} alt='LIQUID' />
                  </button>
                </div>
                <div className='ml-auto flex items-center justify-between gap-5 md:ml-0'>
                  <div className='hidden md:ml-6 md:block'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className='flex rounded-md hover:bg-gray-700 hover:text-white'
                        >
                          <span className='rounded-md px-3 py-2 text-sm font-medium text-gray-100'>
                            {item.name}
                          </span>
                          <ChevronDownIcon className='w-4 text-white' />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className='flex'>
                    <button className='hidden h-9 w-32 items-center justify-center rounded-full bg-gradient sm:flex md:h-11 md:w-40'>
                      <span className='rounded-md px-3 py-2 text-sm font-medium text-gray-100'>
                        Launch App
                      </span>
                    </button>
                    <button onClick={() => navigate('shopping-cart')} className='cursor-pointer'>
                      <ShoppingCart className='h-9 w-[69px] cursor-pointer md:h-10' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className='block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white'
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <button className='h-9 w-32 items-center justify-center rounded-full bg-gradient sm:flex md:h-11 md:w-40'>
                <span className='rounded-md px-3 py-2 text-sm font-medium text-gray-100'>
                  Launch App
                </span>
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export { Navbar }
