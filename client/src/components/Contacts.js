import React, { Fragment } from 'react';
import ContactShowcase from './content/Contacts/ContactShowcase';
import ContactForm from './content/Contacts/ContactForm';

const Contacts = () => {
  return (
    <Fragment>
      <div className='Contacts'>
        <ContactShowcase />
        <div className='container mx-auto p-6 grid gap-4 grid-cols-1 md:grid-cols-2'>
          <ContactForm />
          {/* <div>
            <h1>Hello World</h1>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Contacts;
