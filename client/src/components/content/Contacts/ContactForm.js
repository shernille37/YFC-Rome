import React, { Fragment, useRef } from 'react';

const ContactForm = () => {
  let name = useRef();
  let email = useRef();
  let message = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    name.current.value = '';
    email.current.value = '';
    message.current.value = '';
  };

  return (
    <Fragment>
      <div className='w-full'>
        <form
          className='bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 border-red-500 border'
          onSubmit={onSubmit}
        >
          <div>
            <p className='text-2xl font-exo text-center mb-5'>
              We would like to hear from you!
            </p>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Name'
              autoComplete='off'
              ref={name}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Email Address'
              autoComplete='off'
              ref={email}
            />
          </div>

          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              type='text'
              placeholder='Message'
              ref={message}
            />
          </div>
          <div className='flex items-center justify-center'>
            <button
              className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactForm;
