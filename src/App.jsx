import ContactList from './components/ContactList';
import './App.css'
import { useState } from 'react';
import SelectedContact from './components/SelectedContact';

export default function App() {
const [selectedContact, setSelectedContact] = useState(null)
console.log(selectedContact)
  return (
    <>
      { selectedContact  ? <SelectedContact selectedContact={selectedContact}/> : <ContactList setSelectedContact={setSelectedContact}/> }

    </>
  );
}