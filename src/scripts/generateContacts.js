import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';


const generateContacts = async (number) => {
    try {
        let contactsFromDB = [];
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contactsFromDB = JSON.parse(data);

        const newContacts = [];
        for (let i = 0; i < number; i += 1){
            newContacts.push(createFakeContact());
        }

        const updateContacts = [...contactsFromDB, ...newContacts];

        await fs.writeFile(PATH_DB, JSON.stringify(updateContacts, undefined, 2));
    } catch (error) {
        console.error(error);
    }
};

generateContacts(5);

