import {
  GET_ALL_CONTACT,
  GET_ALL_CONTACT_FAIL,
  GET_ALL_CONTACT_LOAD,
} from "../Constants/Contacts";
import axios from "axios";
import { response } from "express";

export const getAllContacts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CONTACT_LOAD });
  try {
    const response = await axios.get("/contact/");
    //result => we need only data from it
    dispatch({ type: GET_ALL_CONTACT, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ALL_CONTACT_FAIL });
  }

  // return{
  //     type:GET_ALL_CONTACT,
  //     payload:;
  // }
};
// export const deleteContact = (id) => async (dispatch) => {
//   try {
//     await axios.delete(`/contact/${id}`);
//     dispatch(getAllContacts());
//   } catch (error) {
//     dispatch({ type: GET_ALL_CONTACT_FAIL });
//   }
// };
