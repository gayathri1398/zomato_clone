import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import {FcGoogle} from 'react-icons/fc';

export default function SignIn({isOpen,setIsOpen, ...props}) {

    
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
     

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              
                <div className="mt-2 flex flex-col gap-3">
                   <button className="border p-2 flex items-center gap-3 justify-center">SignIn with Google <FcGoogle/></button>
                  <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-base">Email</label>
                      <input type="email" id="email" placeholder="JohnDoe@email.com" className="border p-2 focus:outline-none focus:border-zomato-400 bg-none "/>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label htmlFor="password"  className="text-base">Password</label>
                      <input type="password" id="password" placeholder="******" className="border p-2 focus:outline-none focus:border-zomato-400"/>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-white bg-zomato-400 border border-transparent rounded-md hover:bg-white hover:text-zomato-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                  SignIn
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
