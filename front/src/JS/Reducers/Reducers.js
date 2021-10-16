import {
  GET_ALL_CONTACT,
  GET_ALL_CONTACT_FAIL,
  GET_ALL_CONTACT_LOAD,
} from "../Constants/Contacts";

const initialState = {
  contacts: [],
  isLoad: false,
  isError: false,
};

const ContactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CONTACT_LOAD:
      return { ...state, isLoad: true };
    case GET_ALL_CONTACT:
      return { ...state, contacts: payload.contacts, isLoad: false };
    case GET_ALL_CONTACT_FAIL:
      return { ...state, isError: true, isLoad: false };

    default:
      return state;
  }
};
export default ContactReducer;
