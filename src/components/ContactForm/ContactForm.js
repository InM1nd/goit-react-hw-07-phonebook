import { useState } from 'react';
import {useCreateContactsMutation, useFetchContactsQuery } from '../../serviceAPI/contactsAPI';
import style from './ContactForm.module.css';

export default function ContactForm( ) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [addContact] = useCreateContactsMutation();
  const { data } = useFetchContactsQuery();

  const handleInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;

      default:
    }
    return;
  };


  const handleSubmit = e => {

    e.preventDefault();
    
    if (
      data?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name}, is already in your contacts`);
    } else {
      addContact({ name, phone });
      setName('');
      setPhone('');
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>
        <span className={style.text}>Name</span>
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.label}>
        <span className={style.text}>Phone</span>
        <input
          className={style.input}
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={style.addBtn}>
        Add contact
      </button>
    </form>
  );
}
