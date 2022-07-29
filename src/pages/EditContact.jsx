import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { contactFormConfig } from '../components/form/contactFormConfig';
import useForm from '../components/form/useForm';
import Button from '../components/Button';

import { getContact, updateContact } from '../services/contactServices';

const EditContact = () => {
  const [data, setData, Inputs] = useForm(contactFormConfig);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getContact(id).then((res) => setData({ name: res.name, email: res.email }));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.name && data.email) {
      const contact = {
        id,
        ...data,
      };
      updateContact(contact)
        .then((res) => {
          if (res.status === 200) navigate('/');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form className="bg-zinc-800 w-full flex flex-col items-center justify-center p-5 rounded-xl text-lg">
      <div className="flex flex-col justify-center items-center sm:w-96 space-y-4">
        <h1 className="text-2xl mb-2 text-sky-500">Edit Contact</h1>
        {Inputs}
        <Button onClick={submitHandler}>Update</Button>
      </div>
    </form>
  );
};

export default EditContact;
