import { IContact } from '../types/types';

const baseURL = 'http://localhost:3003';
const headers = {
  'Content-Type': 'application/json',
};

export function getContacts(): Promise<IContact[]> {
  return fetch(`${baseURL}/contacts`, {
    method: 'GET',
    headers,
  }).then((res) => res.json());
}

export function getContact(id: string): Promise<IContact> {
  return fetch(`${baseURL}/contacts/${id}`, {
    method: 'GET',
    headers,
  }).then((res) => res.json());
}

export function addContactService(contact: IContact): Promise<Response> {
  return fetch(`${baseURL}/contacts`, {
    method: 'POST',
    body: JSON.stringify(contact),
    headers,
  });
}

export function updateContact(contact: IContact): Promise<Response> {
  return fetch(`${baseURL}/contacts/${contact.id}`, {
    method: 'PUT',
    body: JSON.stringify(contact),
    headers,
  });
}

export function deleteContactService(id: number): Promise<Response> {
  return fetch(`${baseURL}/contacts/${id}`, {
    method: 'DELETE',
    headers,
  });
}
