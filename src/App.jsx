// src/App.jsx
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  return (
  <>
  <NavBar />
  <h1>Mailboxes</h1>
  <Routes>
  <Route path="/" element={<main><h1>Post Office</h1></main>} />
  <Route path="/mailboxes" element={<MailboxList /> } />
  <Route path="/new-mailbox" element={<MailboxForm />} />
  <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
 </Routes>

  </>
  )
}

export default App;

