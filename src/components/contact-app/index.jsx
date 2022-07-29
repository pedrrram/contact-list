import { useCallback, useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { getContacts } from '../../services/contactServices';
import ContactList from './ContactList';

const ContactApp = () => {
  const [contacts, setConatcts] = useState([]);
  const [allContacts, setAllContacts] = useState();
  const [searchedText, setSearchedText] = useState('');

  const addContact = useCallback((contact) => {
    setConatcts((prevContacts) => [...prevContacts, contact]);
    setAllContacts((prevContacts) => [...prevContacts, contact]);
  }, []);

  const deleteContact = useCallback((id) => {
    setConatcts((prevContacts) => [
      ...prevContacts.filter((cn) => cn.id !== id),
    ]);
    setAllContacts((prevContacts) => [
      ...prevContacts.filter((cn) => cn.id !== id),
    ]);
  }, []);

  const handleSearch = (e) => {
    setSearchedText(e.target.value);
    const searched = e.target.value;

    if (searched !== '') {
      const filteredContacts = allContacts.filter((cnt) =>
        Object.values([cnt.name, cnt.email])
          .join(' ')
          .toLocaleLowerCase()
          .includes(searched.toLocaleLowerCase())
      );
      setConatcts(filteredContacts);
    } else {
      setConatcts(allContacts);
    }
  };

  useEffect(() => {
    getContacts()
      .then((data) => {
        setConatcts(data);
        setAllContacts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Outlet context={addContact} />

      <input
        type="text"
        placeholder="search contact name..."
        value={searchedText}
        onChange={handleSearch}
        className="py-[6px] px-3 mt-6 sm:w-72 font-light rounded-lg outline-none shadow-sm border-2 border-zinc-600 bg-zinc-300 text-zinc-900 hover focus:border-yellow-500 placeholder:text-zinc-700"
      />

      {contacts.length ? (
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      ) : null}
    </>
  );
};

export default ContactApp;
