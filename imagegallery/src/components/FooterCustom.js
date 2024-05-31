import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer
    className="bg-dark text-light py-4 fixed-bottom"
    style={{
      backgroundColor: "#333",
      color: "#fff",
      padding: "20px",
      //   position: "fixed",
      bottom: "0",
      width: "100%",
      marginTop: "130px",
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Ranjula Bandara</h5>
          <p>Web and Mobile App Developer</p>
          <p>Developed by Lucifer</p>
        </div>
        <div className="col-md-6">
          <h5>Contact Me</h5>
          <ul
            className="list-unstyled d-flex justify-content-evenly mb-0 "
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "space-evenly",
              padding: "0",
              margin: "0",
            }}
          >
            <li>
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/your-facebook-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/your-instagram-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <FaInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
