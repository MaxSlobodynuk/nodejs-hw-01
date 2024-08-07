import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  console.log(data);
  let contacts = JSON.parse(data);

  for (let index = 0; index < number; index++) {
    contacts.push(createFakeContact());
  }

  await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
};

generateContacts(5);
