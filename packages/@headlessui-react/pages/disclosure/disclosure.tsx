import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'

export default function Home() {
  return (
    <div className="flex justify-center w-screen h-full p-12 bg-gray-50">
      <div className="w-full max-w-xs mx-auto">
        <Disclosure>
          <Disclosure.Button>Trigger</Disclosure.Button>

          <Transition
            enter="transition duration-1000 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-1000 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="p-4 bg-white mt-4">Content</Disclosure.Panel>
          </Transition>
        </Disclosure>
      </div>
    </div>
  )
}
