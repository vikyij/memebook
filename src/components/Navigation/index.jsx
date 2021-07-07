import React from "react";
import { Link } from "react-router-dom";
import { Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa"

import styles from "./navigation.module.css";

const Navigation = () => {
  const { navbarWrapper, btnStyle, searchItem, searchInput } = styles;

  return (
    <nav className={`navbar navbar-expand-md ${navbarWrapper}`}>
      <Link className="navbar-brand " to="/home">
        <Heading size="lg" m={4}>
          memebook
        </Heading>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav" style={{alignItems: 'center'}}>
          <li className="nav-item">
            <button type="button" className={`btn ${btnStyle}`}>
              New Post
            </button>
          </li>
          <li className={`nav-item ${searchItem}`}>
            <InputGroup className={searchInput}>
              <Input />
              <InputRightElement children={<button><FaSearch /></button>} />
            </InputGroup>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
            <button type="button" className={`btn btn-outline-dark`} style={{color: "var(--white)"}}>
              Sign in
            </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
            <button type="button" className={`btn ${btnStyle}`}>
              Sign up
            </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
