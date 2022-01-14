import { useState, useEffect } from 'react';

import './style.css'
import List from './List';
import Form from './Form';

function Contacts() {

    const [contacts, setContasts] = useState([
        {
            fullname: 'Ayşen',
            phone_number: '1234543'
        },{
            fullname: 'Mustafa',
            phone_number: '8749'
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts]);

    return (
        <div id='contacts-container'>
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContasts} contacts = {contacts}/>
        </div>
    );
}

export default Contacts;
