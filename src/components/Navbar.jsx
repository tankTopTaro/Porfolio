import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { DarkThemeToggle } from 'flowbite-react'
import { Link, animateScroll as scroll, scroller } from 'react-scroll'

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
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const heroSectionHeight = 500; // Update with your hero section height
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > heroSectionHeight);

      // Find the active section based on the scroll position
      const sections = navigation.map((item) => item.href);
      const activeSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
      }
        return false;
      });

      if (activeSection) {
        setCurrent(activeSection);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuart',
    });
    setCurrent('home');
  }

  function handleCurrent(href) {
    setCurrent(href);
    scroller.scrollTo(href, {
      duration: 1000,
      smooth: 'easeInOutQuart',
      offset: -50, // Adjust the offset if needed
    });
  }

  return (
    <>
    <Disclosure as="nav" className="bg-[#131418] w-full fixed top-0 left-0 z-50" id='top'>
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
                          current === item.href ? 'bg-[#242a2f] text-[#bd6507]' : 'text-gray-300 hover:text-white',
                          'rounded-md px-3 py-2 text-xl font-semibold'
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
                          current === item.href ? 'bg-[#242a2f] text-[#bd6507]' : 'text-gray-300 hover:text-white',
                          'rounded-md px-3 py-2 text-l font-semibold'
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
      {/* Back to Top */}
      {showBackToTop && (
      <Link
          to='top'
          smooth
          spy
          className='z-10 fixed bottom-4 right-4 bg-[#242a2f] dark:bg-white rounded-full p-2 shadow hover:bg-[#bd6507] dark:hover:bg-[#bd6507] text-white dark:text-gray-600 dark:hover:text-white transition-opacity duration-500 ease-in'
          onClick={scrollToTop}
          style={{ opacity: showBackToTop ? 1 : 0 }}>
          <ChevronUpIcon className='h-6 w-6'/>
      </Link>)}
    </>
  )
}



