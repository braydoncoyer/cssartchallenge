import { Popover, Transition } from '@headlessui/react'

import Footer from './Footer'
import { Fragment } from 'react'
import Link from './Link'
import Logo from '@/data/cssartchallengelogo.svg'
import { ReactNode } from 'react'
import SectionContainer from './SectionContainer'
import headerNavLinks from '@/data/headerNavLinks'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="relative flex min-h-screen flex-col justify-between overflow-hidden">
        <div className="grow">
          <Popover as="header" className="relative">
            <div className="pt-6">
              <nav
                className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex flex-1 items-center">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <Link href="/">
                      <a>
                        <span className="sr-only">CSS Art Challenge</span>
                        <Logo />
                      </a>
                    </Link>

                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M4.75 5.75H19.25"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M4.75 18.25H19.25"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M4.75 12H19.25"
                          ></path>
                        </svg>
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-8 md:ml-10 md:flex">
                    {headerNavLinks.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a className="text-base font-medium text-white hover:text-gray-300">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <Link href="/">
                        <a>
                          <span className="sr-only">CSS Art Challenge</span>
                          <Logo />
                        </a>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.25 6.75L6.75 17.25"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M6.75 6.75L17.25 17.25"
                          ></path>
                        </svg>
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="pt-5 pb-6">
                    <div className="space-y-1 px-2">
                      {headerNavLinks.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <div className="pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <main>{children}</main>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <Footer />
        </div>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
