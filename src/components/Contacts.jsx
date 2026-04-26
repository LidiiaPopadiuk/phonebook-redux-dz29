import styled from "styled-components";
import contactsImg from '../img/noContactsYet.jpg';
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../redux/selectors";
import { removeContact } from '../redux/actions';

const Button = styled.button`
  background-color: rgb(255, 214, 220);
`

export const Contacts = () => {
    const dispatch = useDispatch()

    const contacts = useSelector(getVisibleContacts || [])
    console.log(contacts);

    return (
        <div>
            <h2>Contacts</h2>
            {contacts.length === 0 ? (
                <div>
                    <p>No contacts yet</p>
                    <img style={{ width: '100px', height: '100px' }} src={contactsImg} alt={contactsImg} />
                </div>
            ) : (
                <ul>
                    {contacts.map(contact => {
                        return <li key={contact.id}>{contact.name}: {contact.number} <Button id={contact.id} onClick={() => dispatch(removeContact(contact.id))}>Delete</Button></li>
                    })}
                </ul>
            )}
        </div>
    )
}