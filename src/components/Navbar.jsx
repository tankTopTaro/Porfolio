import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { DarkThemeToggle } from 'flowbite-react'
import { Link } from 'react-scroll'

const navigation = [
  { name: 'Home', href: 'home',  },
  { name: 'Projects', href: 'projects',  },
  { name: 'Contact Me', href: 'contact',  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MyNavbar() {
  const [current, setCurrent] = useState('home')
  
  function handleCurrent(href) {
    setCurrent(href)
  }
  return (
    <Disclosure as="nav" className="bg-[#131418] w-full fixed top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        activeClass='active'
                        smooth 
                        spy 
                        to={item.href}
                        className={classNames(
                          current === item.href ? 'bg-[#242a2f] text-[#bd6507] pb-7' : 'text-gray-300 hover:text-white',
                          'px-3 py-2 text-xl font-semibold'
                        )}
                        onClick={() => handleCurrent(item.href)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <DarkThemeToggle className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium' />
                  <div>
                    <img
                        className="h-8 w-8 rounded-full"
                        src="https://res.cloudinary.com/delgya5vj/image/upload/c_fill,g_face,w_300,h_300,r_max/v1687473528/doggos/My_project_5_akvlhm.png"
                        alt=""
                      />
                  </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button>
                  <Link
                        key={item.name}
                        activeClass='active'
                        smooth 
                        spy 
                        to={item.href}
                        className={classNames(
                          current === item.href ? 'bg-[#242a2f] text-[#bd6507] pb-3.5' : 'text-gray-300 hover:text-white',
                          'px-3 py-2 text-l font-semibold'
                        )}
                        onClick={() => handleCurrent(item.href)}
                      >
                        {item.name}
                      </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}



