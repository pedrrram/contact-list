const baseURL = 'http://localhost:3003';

export function getContacts() {
  return fetch(`${baseURL}/contacts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
}

export function addContactService(contact) {
  return fetch(`${baseURL}/contacts`, {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function deleteContactService(id) {
  return fetch(`${baseURL}/contacts/${id}`, {
    method: 'DELETE',
  });
}
