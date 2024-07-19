import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';


export const countContacts = async () => {
    try {
        let contactsFromDB = [];
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contactsFromDB = JSON.parse(data, undefined, 2);
        return contactsFromDB.length;
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());

