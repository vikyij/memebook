import React from 'react';
import { Textarea } from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';
import Navigation from '../../components/Navigation';

import styles from './upload.module.css';

const Upload = () => {
  const { wrapper, dropImg, chooseImg, chooseImgWrapper, btnStyle, textArea } = styles;

  return (
    <>
      <Navigation />
      <div className={wrapper}>
        <div className={dropImg}>
          <p>Drop Images here</p>
        </div>
        <div className={chooseImgWrapper}>
          <div className={chooseImg}>
            <FaImage style={{ display: 'inline', marginRight: '10px' }} />{' '}
            Choose Photo or Image
          </div>
          <div>
            <Textarea placeholder='Whats funny?' className={textArea}/>
          </div>
          <button type='button' className={`btn ${btnStyle}`}>
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
