import { useLocation } from 'react-router-dom';

import Contact from '../components/contact-app/Contact';

const ContactDetails = () => {
  const {
    state: { contact },
  } = useLocation();

  return <Contact contact={contact} />;
};

export default ContactDetails;
