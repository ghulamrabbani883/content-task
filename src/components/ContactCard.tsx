import React from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { LuSubtitles } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { contactType, useAppDispatch } from "../app/store";
import { deleteContact } from "../app/contact/contactSlice";
import {BiRightArrowAlt} from 'react-icons/bi'
const ContactCard = (props: contactType) => {
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className="flex flex-col gap-5 shadow-lg h-fit w-[350px] p-5 ">
      <div className="flex justify-start gap-5 items-start">
        {/* <div className="">
          <FaUserCircle className="text-textColor1" size={80} />
        </div> */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <AiOutlineUser className="text-primary" size={32} />
              <h2 className="text-xl font-normal">{props.name}</h2>
            </div>
            <div className="flex gap-3 ml-3">
              <LuSubtitles className="text-primary" size={20} />
              <p className="text-md font-semibold">{props.job}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <AiOutlineMail className="text-primary" size={24} />
            <p className="text-lg font-normal">{props.email}</p>
          </div>
          <div className="flex gap-3">
            <AiOutlinePhone className="text-primary" size={24} />
            <p className="text-lg font-normal">{props.phone}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
            className="flex gap-2 items-center text-lg"
              to={`/contact/${props.id}`}
            >
                <BiRightArrowAlt size={16} />
              See Contact.....
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          className="w-32 h-8 bg-primary text-tertiary  text-lg rounded hover:bg-secondary "
          type="button"
          onClick={(e: React.MouseEvent<HTMLElement>) => handleDelete(props.id)}
        >
          Delete
        </button>

        <Link
          className="w-32 h-8 bg-primary text-tertiary text-center  text-lg rounded hover:bg-secondary "
          to={`/edit/${props.id}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
