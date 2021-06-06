import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function MyDropdown() {
    return (
        <Menu>
            <div className="flex flex-col">
                <Menu.Button className="px-5 py-2 rounded-md bg-gray-700 bg-opacity-40 text-white font-bold">
                    <div className="flex space-x-5 items-center">
                        <span>Options</span>
                        <div className="h-5 w-5">
                            <svg className="h-full w-full" id="i-chevron-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M30 12 L16 24 2 12" />
                            </svg>
                        </div>
                    </div>
                </Menu.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-80"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-80"
                >
                    <div className="relative">
                        <Menu.Items className="border absolute top-2 right-0 flex flex-col w-64 p-1 bg-white rounded-md shadow-md">
                            <Menu.Item >
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-purple-500 text-white'} px-3 py-2 rounded-md `}
                                        href="/account-settings"
                                    >
                                        Account settings
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-purple-500 text-white'} px-3 py-2 rounded-md`}
                                        href="/account-settings"
                                    >
                                        Documentation
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item disabled>
                                <span className="opacity-75 px-3 py-2 rounded-md">Invite a friend (coming soon!)</span>
                            </Menu.Item>
                        </Menu.Items>
                    </div>
                </Transition>

            </div>
        </Menu>
    )
}