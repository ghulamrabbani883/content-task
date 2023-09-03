import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { LuSubtitles } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { useContact } from "../app/contact/contactSlice";

const SingleContact = () => {
  const { contactId } = useParams();
  const contact = useContact(contactId);
  console.log(contact);
  return (
    <div className="mt-12 ml-12 flex flex-col sm:flex-row gap-5">
      <div className="">
        <FaUserCircle className="text-textColor1" size={120} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <AiOutlineUser className="text-primary" size={36} />
          <h2 className="text-2xl lm:text-3xl font-normal">
            {contact?.name}
          </h2>
        </div>
        <div className="flex gap-3 ml-3">
          <LuSubtitles className="text-primary" size={24} />
          <p className="text-lg font-semibold">{contact?.job}</p>
        </div>
        <div className="flex gap-3">
          <AiOutlineMail className="text-primary" size={28} />
          <p className="text-lg font-normal">{contact?.email}</p>
        </div>
        <div className="flex gap-3">
          <AiOutlinePhone className="text-primary" size={28} />
          <p className="text-lg font-normal">{contact?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
