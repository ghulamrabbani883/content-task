import React from "react";
import { Link } from "react-router-dom";
import { GoCrossReference } from "react-icons/go";
import ContactCard from "./ContactCard";
import { contactType, useAppSelector } from "../app/store";
import { selectContact } from "../app/contact/contactSlice";

const Contact = () => {
  const allContact = useAppSelector(selectContact)
  return (
    <div className="flex flex-col w-full pb-20 pt-20">
      <div className="h-36 flex justify-center items-center w-full">
        <Link to="/contact/create">
          <button className="h-12 w-48 bg-secondary text-tertiary hover:bg-primary transition-all duration-150 text-lg rounded">
            Create New Contact
          </button>
        </Link>
      </div>
      <div className="min-h-screen w-full">
        {allContact.contact.length > 0 ? (
          <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 justify-center place-items-center gap-3">
            {allContact.contact.map((contact:contactType) => (
                <ContactCard id={contact.id} name={contact.name} job={contact.job} email={contact.email} phone={contact.phone} key={contact.id} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center w-full">
            <div className="flex gap-6 w-fit shadow-lg p-5">
              <div className="flex items-center">
                <GoCrossReference size={36} />
              </div>
              <p className="text-textColor1 font-medium text-lg">
                No Contact Found,
                <br /> Please add contacts from
                <br /> Create New Contact Button
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
