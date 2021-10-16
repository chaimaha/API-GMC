import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer
        id="sticky-footer"
        class="flex-shrink-0 py-4 bg-dark text-white-50"
      >
        <div class="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
