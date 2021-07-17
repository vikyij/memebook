import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

import styles from './navigation.module.css';

const Navigation = () => {
  const {
    navbarWrapper,
    btnStyle,
    searchItem,
    searchInput,
    dropdownMenu,
    dropDown,
    dropdownToggle,
    dropdownItem,
  } = styles;

  const handleDropdown = () => {
    let elem = document.getElementsByClassName('dropdown-menu');

    if (elem[0].style.display === 'none') {
      elem[0].style.display = 'block';
    } else {
      elem[0].style.display = 'none';
    }
  };

  return (
    <nav className={`navbar navbar-expand-md ${navbarWrapper}`}>
      <Link className='navbar-brand ' to='/home'>
        <Heading size='lg' m={4}>
          memebook
        </Heading>
      </Link>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#collapsibleNavbar'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='collapsibleNavbar'>
        <ul className='navbar-nav' style={{ alignItems: 'center' }}>
          <li className='nav-item'>
            <Link to='/upload'>
              <button type='button' className={`btn ${btnStyle}`}>
                New Post
              </button>
            </Link>
          </li>
          <li className={`nav-item ${searchItem}`}>
            <InputGroup className={searchInput}>
              <Input />
              <InputRightElement
                children={
                  <button>
                    <FaSearch />
                  </button>
                }
              />
            </InputGroup>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              <button type='button' className={`btn ${btnStyle}`}>
                Sign in
              </button>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/signup'>
              <button type='button' className={`btn ${btnStyle}`}>
                Sign up
              </button>
            </Link>
          </li>
          <div class={`dropdown ${dropDown}`} onClick={handleDropdown}>
            <div
              class={`dropdown-toggle ${dropdownToggle}`}
              data-toggle='dropdown'
            >
              m
            </div>
            <div
              className={`dropdown-menu ${dropdownMenu}`}
              style={{ display: 'none' }}
            >
              <Link class={`dropdown-item ${dropdownItem}`} to='#'>
                Posts
              </Link>
              <Link class={`dropdown-item ${dropdownItem}`} to='#'>
                Comments
              </Link>
              <Link class={`dropdown-item ${dropdownItem}`} to='#'>
                About
              </Link>
              <div class='dropdown-divider'></div>
              <Link class={`dropdown-item ${dropdownItem}`} to='#'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FiSettings style={{ marginRight: '10px' }} /> Settings
                </div>
              </Link>
              <Link class={`dropdown-item ${dropdownItem}`} to='/login'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaSignOutAlt style={{ marginRight: '10px' }} />
                  Sign Out
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
