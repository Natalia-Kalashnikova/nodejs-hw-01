import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';


export const getAllContacts = async () => {
  try {
    const contactsFromDB = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(contactsFromDB);
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());
