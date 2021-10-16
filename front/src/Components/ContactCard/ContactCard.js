import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ContactCard.css";
import { deleteContact } from "../../JS/Actions/Actions";

const ContactCard = ({ contact }) => {
  // const dispatch = useDispatch();
  // const handleClick = () => {
  //   let conf = window.confirm("are you sure to delete this contact");
  //   console.log(conf);
  //   if (conf) {
  //     dispatch(deleteContact(contact._id));
  //   }
  // };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=1027"
                  alt="profile"
                />
              </div>
              <div className="team-content">
                <h4 className="name">
                  {contact.name} {contact.lastName}
                </h4>
                <h4 className="title">{contact.age} years</h4>
                <p>{contact.email}</p>
              </div>
              <ul className="social">
                <li>
                  <button>Delete</button>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  >
                    Edit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
