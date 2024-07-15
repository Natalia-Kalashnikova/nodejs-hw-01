import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';


export const addOneContact = async () => {
    try {
        let contactsFromDB = [];
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contactsFromDB = JSON.parse(data);

        const oneContact = createFakeContact();
        contactsFromDB.push(oneContact);

        await fs.writeFile(PATH_DB, JSON.stringify(contactsFromDB, undefined, 2));
    } catch (error) {
        console.log(error);
    }
};

addOneContact();
