import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Contact from '../components/contact-app/Contact';
import { IContact } from '../types/types';

const ContactDetails: FC = () => {
  const location = useLocation();
  const {
    state: { contact },
  } = location as { state: { contact: IContact } };

  return <Contact contact={contact} />;
};

export default ContactDetails;
