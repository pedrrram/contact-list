import React, { FormEvent, memo } from 'react';

import { Link } from 'react-router-dom';

import EditIcon from '../icons/EditIcon';
import DeleteIcon from '../icons/DeleteIcon';

import { deleteContactService } from '../../services/contactServices';
import { IContact } from '../../types/types';

import userImage from '../../assets/images/user.png';

interface Props {
  contact: IContact;
  deleteContact?: (id: number) => void;
}

const Contact: React.FC<Props> = ({ contact, deleteContact }) => {
  const deleteHandler = (e: FormEvent): void => {
    e.stopPropagation();
    deleteContactService(contact.id)
      .then((res) => {
        if (deleteContact) deleteContact(contact.id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-between items-center w-full sm:w-1/3 bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-xl space-x-3">
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

      <Link to={`/edit/${contact.id}`}>
        <EditIcon />
      </Link>

      {deleteContact && (
        <div onClick={deleteHandler}>
          <DeleteIcon />
        </div>
      )}
    </div>
  );
};

export default memo(Contact);
