import Contact from './Contact';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="text-zinc-50 mt-6 w-full flex flex-col items-center p-5 space-y-5">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          deleteContact={deleteContact}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default ContactList;
