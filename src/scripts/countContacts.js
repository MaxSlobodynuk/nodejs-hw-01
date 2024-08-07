import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  let count = 0;
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const dataParse = JSON.parse(data);

  return dataParse.length;
};

console.log(await countContacts());
