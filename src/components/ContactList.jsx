import {useState, useEffect} from "react";  
import ContactRow from "./ContactRow";

export default function ContactList({setSelectedContact}) { 
const [contacts, setContacts] = useState([])

useEffect(()=>{
    async function fetchContacts(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/')
            const result = await response.json()
            setContacts(result)
        } catch (error) {
            console.log(error)
        }
    } 
    fetchContacts()


},[])

  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
               // Map over data here
               contacts.map((contact)=>{
                return (<ContactRow key={contact.id} contact={contact} setSelectedContact={setSelectedContact}/>)

               })
             }
          </tbody>
        </table>
    ); 
}