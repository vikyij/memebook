import React, { useState } from 'react';
import {
  Heading,
  Text,
  Icon,
  FormControl,
  Input,
  Box,
  Flex,
  useToast,
} from '@chakra-ui/react';
import styles from './signup.module.css';
import {
  FaArrowLeft,
  FaFacebookF,
  FaTwitter,
  FaApple,
  FaGoogle,
  FaYahoo,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId =
  '679240564225-sngmvvja6lb9m3kt7gark0nntn4l9qoo.apps.googleusercontent.com';

const Signup = () => {
  const [input, setInput] = useState('');
  const [allInputs, setAllInputs] = useState({
    username: '',
    email: '',
    password: '',
    retypePassword: '',
    phoneNumber: '',
  });
  const toast = useToast();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, retypePassword, phoneNumber } = input;
    setAllInputs((prevInput) => ({
      ...prevInput,
      username,
      email,
      password,
      retypePassword,
      phoneNumber,
    }));

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      username === '' ||
      email === '' ||
      password === '' ||
      retypePassword === '' ||
      phoneNumber === ''
    ) {
      toast({
        title: 'Error',
        description: 'Input fields cannot be empty',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    } else if (!re.test(String(email).toLowerCase())) {
      toast({
        title: 'Error',
        description: 'Invalid email!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    } else if (password !== retypePassword) {
      toast({
        title: 'Error',
        description: 'Your Passwords do not match!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }
  };

  return (
    <div className={styles.container}>
      <Text>
        <Icon as={FaArrowLeft} /> back to memebook
      </Text>
      <div className={styles.form}>
        <Heading size='3xl' m={4}>
          memebook
        </Heading>

        <Box className={styles.register}>
          <Text fontSize='12px' style={{ textAlign: 'center' }}>
            Register with
          </Text>
          <Flex className={styles.icons} justify='space-between'>
            <FacebookLogin
              appId='327551925486564'
              autoLoad={true}
              fields='name,email,picture'
              callback={responseFacebook}
              render={(renderProps) => (
                <button onClick={renderProps.onClick}>
                  <FaFacebookF className={styles.icon} />
                </button>
              )}
            />
            <FaTwitter className={styles.icon} />
            <FaApple className={styles.icon} />
            <GoogleLogin
              clientId={clientId}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FaGoogle className={styles.icon} />
                </button>
              )}
              buttonText='Login'
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              style={{ marginTop: '100px' }}
              isSignedIn={true}
            />
            <FaYahoo className={styles.icon} />
          </Flex>
          <Text fontSize='12px' style={{ textAlign: 'center' }}>
            or with memebook
          </Text>

          <form onSubmit={handleSubmit}>
            <Box className={styles.inputs}>
              <FormControl
                id='username'
                mb={3}
                className={styles.input}
                isRequired
              >
                <Input
                  placeholder='Username'
                  name='username'
                  onChange={handleInput}
                />
              </FormControl>
              <FormControl
                id='email'
                mb={3}
                className={styles.input}
                isRequired
              >
                <Input
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={handleInput}
                />
              </FormControl>
              <FormControl
                id='password'
                mb={3}
                className={styles.input}
                isRequired
              >
                <Input
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={handleInput}
                />
              </FormControl>
              <FormControl
                id='retype'
                mb={3}
                className={styles.input}
                isRequired
              >
                <Input
                  type='password'
                  placeholder='Retype Password'
                  name='retypePassword'
                  onChange={handleInput}
                />
              </FormControl>
              <FormControl
                id='phone'
                mb={3}
                className={styles.input}
                isRequired
              >
                <Input
                  type='number'
                  placeholder='Phone Number'
                  name='phoneNumber'
                  onChange={handleInput}
                />
              </FormControl>

              <Box style={{ textAlign: 'center' }}>
                <Text fontSize='12px'>
                  Standard message and data rates may apply
                </Text>
                <Text fontSize='12px'>
                  <a href='#' target='blank' color='white'>
                    <strong>Why do I have to verify my phone?</strong>
                  </a>
                </Text>
              </Box>
            </Box>
          </form>
          <div className={styles.btnWrapper}>
            <Link to='/login'>
              <button className={`${styles.btn} ${styles.signinBtn}`}>
                sign in
              </button>
            </Link>
            <button
              className={styles.btn}
              style={{ backgroundColor: '#5C69FF' }}
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </Box>
      </div>
      <Flex style={{ marginTop: '-20px' }}>
        <a href='#' style={{ marginRight: '20px' }}>
          terms
        </a>
        <a href='#'>privacy</a>
      </Flex>
    </div>
  );
};

export default Signup;
