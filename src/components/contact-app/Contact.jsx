import { memo } from 'react';

import { Link } from 'react-router-dom';

import userImage from '../../assets/user.png';
import { deleteContactService } from '../../services/contactServices';

const Contact = ({ contact, deleteContact }) => {
  const deleteHandler = (e) => {
    e.stopPropagation();
    deleteContactService(contact.id)
      .then(() => {
        deleteContact(contact.id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-between items-center w-full sm:w-1/3 bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-xl">
      <Link
        to={`/contacts/${contact.id}`}
        state={{ contact }}
        className="flex items-center w-full"
      >
        <img
          src={userImage}
          alt="user"
          className="h-14 w-14 rounded-full mr-4"
        />
        <span className="mr-4">{contact.name}</span>
        <span>{contact.email}</span>
      </Link>

      {deleteContact && (
        <div onClick={deleteHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-rose-600 cursor-pointer hover:text-rose-400 transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default memo(Contact);
