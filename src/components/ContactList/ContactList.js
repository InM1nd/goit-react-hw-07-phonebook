import style from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {useDeleteContactsMutation, useFetchContactsQuery } from '../../serviceAPI/contactsAPI';
import { getFilter } from '../../serviceAPI/filterSlice';

export default function ContactList ()  {
  const [handleDelete, { isLoading: isDeleting }] = useDeleteContactsMutation();
  const { data: contacts, isLoading } = useFetchContactsQuery();

  const filterSense = useSelector(getFilter);



  const renderContactList = contacts?.filter(({ name }) =>
  name.toLowerCase().includes(filterSense.toLowerCase()));




    return (
      <ul>
        {isLoading && <p>Loading...</p>}
        {renderContactList && renderContactList.map(({ id, name, phone }) => {
          return (
            <li key={id} id={id} className={style.item}>
              {name}: {phone}
              <button onClick={() => handleDelete(id)} className={style.button}>
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };
  
