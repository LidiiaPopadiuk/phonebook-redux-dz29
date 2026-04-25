import { Component } from "react";
import contactsImg from '../img/noContactsYet.jpg';
// import { useSelector } from "react-redux";

export class Contacts extends Component {

    // deleteContact = (e) => {
    //     const contactId = e.target.id
    //     this.props.deleteData(contactId)
    // }
    // const contacts = useSelector()

    render() {
        // const { contacts, filter } = this.props.listData
        // const filterValue = filter.toUpperCase()

        // const filterContacts = contacts.filter((contact) => {
        //     return contact.name.toUpperCase().includes(filterValue)
        // })
        return (
            <div>
                <h2>Contacts</h2>
                {[].length === 0 ? (
                    <div>
                        <p>No contacts yet</p>
                        <img style={{ width: '100px', height: '100px' }} src={contactsImg} alt={contactsImg} />
                    </div>
                ) : (
                    <ul>
                        {[].map(contact => {
                            return <li key={contact.id}>{contact.name}: {contact.number} <button id={contact.id} onClick={this.deleteContact}>Delete</button></li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}