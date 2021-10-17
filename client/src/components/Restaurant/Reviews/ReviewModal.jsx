import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import ReactStars from 'react-rating-stars-component';

export default function ReviewModal({isOpen, setIsOpen, ...props}) {
  
  function closeModal() {
    setIsOpen(false)
  }

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

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
              className="inline-block h-screen align-middle shadow-lg "
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
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                 Add a Review
                </Dialog.Title>
                <div className="mt-2">
                <div className="flex items-center gap-3 my-2">
                    <div className="flex items-center gap-2">
                        <input type="radio" name="Dining" id="dinin"  />
                        <label htmlFor="dinin" className="text-xl">Dining</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="Dining" id="delivry"  />
                        <label htmlFor="delivry" className="text-xl">Delivery</label>
                    </div>
                    </div>
                   <ReactStars count={5} size={24} onChange={ratingChanged}/>
                   <div className="flex flex-col gap-1 text-base ">
                   <label htmlFor="review" className="font-semibold ">Subject</label>
                     <input type="text"
                       id="review"
                        placeholder="Amazing food"
                         className=" border border-gray-400 focus:outline-none focus:border-zomato-400 rounded"
                         />
                   </div>
                   <div className="flex flex-col gap-1 text-base mt-4 ">
                   <label htmlFor="review" className="font-semibold ">Review</label>
                     <textarea id="review" 
                     placeholder="Amazing food"
                      className=" border border-gray-400 focus:outline-none focus:border-zomato-400 rounded"
                      rows="6"/>
                   </div>
                </div>
                

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black-900 bg-blue-100 border border-transparent rounded-md hover:bg-zomato-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zomato-400"
                    onClick={closeModal}
                  >
                   Submit
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
