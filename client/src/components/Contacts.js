import React, { Fragment, useEffect } from 'react';
import ContactShowcase from './content/Contacts/ContactShowcase';
import ContactForm from './content/Contacts/ContactForm';
import SocialMedias from './content/Contacts/SocialMedias';

const Contacts = () => {
  useEffect(() => {
    document.title = 'YFC Rome | Contacts';
  }, []);

  return (
    <Fragment>
      <div className='Contacts'>
        <ContactShowcase />
        <div className='container mx-auto p-6 grid gap-4 grid-cols-1 md:grid-cols-2'>
          <ContactForm />
          <SocialMedias />
        </div>
      </div>
    </Fragment>
  );
};

export default Contacts;
