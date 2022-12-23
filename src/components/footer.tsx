import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul className="footer__social-list">
        <li>
          <a
            href="https://twitter.com/I_am_dulah_/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-list-icon"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sadiqabubakar526"
            target="_blank"
            rel="noreferrer"
            className="footer__social-list-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/suraj-abubakar-dulah-2757b3202"
            target="_blank"
            rel="noreferrer"
            className="footer__social-list-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/i_am_dulah"
            target="_blank"
            rel="noreferrer"
            className="footer__social-list-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; ABUBAKAR SERDYQ {new Date().getFullYear()}
      </p>
    </div>
  </footer>
)

export default Footer
