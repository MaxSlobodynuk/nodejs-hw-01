import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  console.log(data);
  let contact = JSON.parse(data);
  contact.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(contact, undefined, 2));
};

addOneContact();
