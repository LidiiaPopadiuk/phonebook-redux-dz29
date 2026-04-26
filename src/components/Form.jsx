
import x from './Form.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/actions";
import { getContacts } from '../redux/selectors';


export const Form = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts)

    const inputData = (e) => {
        e.preventDefault()

        const name = e.target.elements.nameText.value
        const number = e.target.elements.number.value

        const nameUpper = name.toUpperCase()

        const nameExist = contacts.some((contact) => {
            return contact.name.toUpperCase() === nameUpper;
        });

        const numberExist = contacts.some((contact) => {
            return contact.number === number;
        });

        if (nameExist) {
            alert(`${name} is already in contacts!`);
            return;
        }

        if (numberExist) {
            alert(`${number} is already exist!`);
            return;
        }

        dispatch(addContact(name, number))

        e.target.reset()
    }

    return (
        <form onSubmit={inputData} className={x.formClas}>

            <label htmlFor="input">Name</label>
            <input
                id="input"
                type="text"
                name="nameText"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />

            <label htmlFor="input2">Number</label>
            <input
                className={x.formClas}
                id="input2"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />

            <button type="submit">Add Contact</button>
        </form>
    )

}