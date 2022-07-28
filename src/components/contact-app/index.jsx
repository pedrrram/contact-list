import { lazy, Suspense, useCallback, useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { getContacts } from '../../services/contactServices';
const ContactList = lazy(() =>
  import(/* webpackChunkName: "ContactList" */ './ContactList')
);

const ContactApp = () => {
  const [contacts, setConatcts] = useState([]);

  const addContact = useCallback((contact) => {
    setConatcts((prevContacts) => [...prevContacts, contact]);
  }, []);

  const deleteContact = useCallback((id) => {
    setConatcts((prevContacts) => [
      ...prevContacts.filter((cn) => cn.id !== id),
    ]);
  }, []);

  useEffect(() => {
    getContacts()
      .then((data) => {
        setConatcts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Outlet context={addContact} />
      {contacts.length ? (
        <Suspense>
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        </Suspense>
      ) : null}
    </>
  );
};

export default ContactApp;
