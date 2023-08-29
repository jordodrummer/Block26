import { useState, useEffect } from "react";

export default function SelectedContact({selectedContact, setSelectedContact}) {
    const [contact, setContact] = useState(null);
    useEffect(() => {
        async function fetchContact() {
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/users/${selectedContact.id}`
            );
            const result = await response.json();
            console.log(result);
            setContact(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact();
      }, []);
return(
<table>
    <thead>
      <tr>
        <td
         
        >
          Go back
        </td>
        <th colSpan='5'>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className='title'>ID</td>
        <td className='title'>Username</td>
        <td className='title'>Name</td>
        <td className='title'>Email</td>
        <td className='title'>Phone</td>
        <td className='title'>Website</td>
      </tr>
      <tr>
        <td>{contact && contact.id}</td>
        <td>{contact && contact.username}</td>
        <td>{contact && contact.name}</td>
        <td>{contact && contact.email}</td>
        <td>{contact && contact.phone}</td>
        <td>{contact && contact.website}</td>       

      </tr>
    </tbody>
  </table>)
}