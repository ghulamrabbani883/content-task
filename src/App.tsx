import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import CreateContact from "./components/CreateContact";
import EditContact from "./components/EditContact";
import SingleContact from "./components/SingleContact";
import MapPage from "./components/MapPage.jsx";
import PageOutlet from "./components/PageOutlet";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PageOutlet />}>
          <Route index element={<Contact />} />
          <Route path="/contact/create" element={<CreateContact />} />
          <Route path="/contact/:contactId" element={<SingleContact />} />
          <Route path="/edit/:contactId" element={<EditContact />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
