import React, { useState } from "react";
import { contactType, useAppDispatch } from "../app/store";
import { nanoid } from "nanoid";
import { createContact } from "../app/contact/contactSlice";
import { useNavigate } from "react-router-dom";

const CreateContact = () => {
  const [contactDetail, setContactDetail] = useState<contactType>({
    id: "",
    name: "",
    job: "",
    email: "",
    phone: "",
  });
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactDetail((prev: contactType) => {
      return { ...prev, [name]: value, id:nanoid() };
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createContact(contactDetail))
    setContactDetail({
        id: "",
        name: "",
        job: "",
        email: "",
        phone: "",
      });
      alert("Contact created")
      navigate('/')
  };
  return (
    <div className="flex flex-col items-center gap-12 pt-16 ls:pt-20">
      <h2 className="text-center mt-8 text-3xl">Create New Contact</h2>
      <div className="w-full flex justify-center">
        <div className="w-[90%] lg:w-[70%] xl:w-[60%] shadow-xl p-10">
          <form
            method="post"
            className="flex flex-col gap-5 "
            onSubmit={handleSubmit}
          >
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                onChange={handleChange}
                value={contactDetail.name}
                className="w-[100%] sm:w-[80%] h-10 outline-none p-2 text-lg font-normal text-textColor1 border border-textColor2 rounded"
                type="text"
                placeholder="Enter your Full Name"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="name">Job:</label>
              <input
                name="job"
                onChange={handleChange}
                value={contactDetail.job}
                className="w-[100%] sm:w-[80%] h-10 outline-none p-2 text-lg font-normal text-textColor1 border border-textColor2 rounded"
                type="text"
                placeholder="Enter your Job Post"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={contactDetail.email}
                  className="w-[100%] h-10 outline-none p-2 text-lg font-normal text-textColor1 border border-textColor2 rounded"
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="phone">Phone:</label>
                <input
                  name="phone"
                  onChange={handleChange}
                  value={contactDetail.phone}
                  className="w-[100%] h-10 outline-none p-2 text-lg font-normal text-textColor1 border border-textColor2 rounded"
                  type="phone"
                  placeholder="Enter your Phone No."
                />
              </div>
            </div>
            <div className="">
              <input
                className="h-10 w-48 bg-secondary text-tertiary font-normal rounded text-lg hover:bg-primary transition-all duration-150 cursor-pointer"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
