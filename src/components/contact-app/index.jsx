import { lazy, Suspense, useCallback, useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

const ContactList = lazy(() =>
  import(/* webpackChunkName: "ContactList" */ './ContactList')
);

const ContactApp = () => {
  const [contacts, setConatcts] = useState([]);

  const addContact = useCallback((contact) => {
    setConatcts((prevContacts) => [
      ...prevContacts,
      { id: Date.now(), ...contact },
    ]);
  }, []);

  const deleteContact = useCallback((id) => {
    setConatcts((prevContacts) => [
      ...prevContacts.filter((cn) => cn.id !== id),
    ]);
  }, []);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) setConatcts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
