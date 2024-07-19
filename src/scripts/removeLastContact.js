import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';


export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contactsFromDB = JSON.parse(data);

        if (contactsFromDB.length > 0) {
            contactsFromDB.pop();
            console.log(contactsFromDB);
            await fs.writeFile(PATH_DB, JSON.stringify(contactsFromDB));
        }
    } catch (error) {
        console.log(error);
    }
};

removeLastContact();
