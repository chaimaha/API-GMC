import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../JS/Actions/Actions";
import ContactCard from "../../Components/ContactCard/ContactCard";
import "./ContactList.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.ContactReducer.contacts);
  const isLoad = useSelector((state) => state.ContactReducer.isLoad);
  const isError = useSelector((state) => state.ContactReducer.isError);
  const load = useSelector((state) => state.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, []);
  return (
    <div className="ContactsContainer">
      {isLoad ? (
        <h1>...Loading</h1>
      ) : isError ? (
        <h1>Sorry ,something went wrong</h1>
      ) : !contacts.length ? (
        <h1>No contact , add someone</h1>
      ) : (
        contacts.map((ele) => (
          <ContactCard
            className="oneContainer"
            contact={ele}
            key={ele._id}
          ></ContactCard>
        ))
      )}
    </div>
  );
};

export default ContactList;
