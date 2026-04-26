export const getContacts = state => state.contacts
// export const getFilter = state => state.filter

export const getVisibleContacts = state => {
    return state.contacts.filter(contact => 
        contact.name.toUpperCase().includes(state.filter.toUpperCase()) // "".includes("") === true
    )
}