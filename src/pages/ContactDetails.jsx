import { useLocation } from 'react-router-dom';
import Contact from '../components/contact-app/Contact';

const ContactDetails = () => {
  const {
    state: { contact },
  } = useLocation();

  return (
    <div className="w-full sm:w-1/3">
      <Contact contact={contact} />
    </div>
  );
};

export default ContactDetails;
