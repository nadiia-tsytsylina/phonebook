import { ContactsUl, ContactsLi } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/selectors';
import ContactsItem from 'components/ContactsItem/ContactsItem';

export default function ContactsList() {
  const filteredContacts = useSelector(selectFiltredContacts);

  return (
    <ContactsUl>
      {filteredContacts.map(contact => (
        <ContactsLi key={contact.id}>
          <ContactsItem contact={contact} />
        </ContactsLi>
      ))}
    </ContactsUl>
  );
}
