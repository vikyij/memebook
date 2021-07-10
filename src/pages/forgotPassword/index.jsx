import React, { useState } from "react";
import {
  Heading,
  Text,
  Icon,
  FormControl,
  Input,
  Box,
  Flex,
  useToast,
  Container,
} from "@chakra-ui/react";
import styles from "./forgotPassword.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [submit, setSubmit] = useState(false);
  const toast = useToast();

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
      toast({
        title: "Error",
        description: "Input fields cannot be empty",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    setSubmit(true);

    console.log(username);
  };

  return (
    <div className={styles.container}>
      <Text>
        <Icon as={FaArrowLeft} /> back to memebook
      </Text>
      <div className={styles.form}>
        <Heading size="3xl" m={4}>
          memebook
        </Heading>

        <Box className={styles.register}>
          <form onSubmit={handleSubmit}>
            <Box className={styles.inputs}>
              {submit === true ? (
                <Container className={styles.submittext}>
                  An email has been sent to you with further instructions. Be
                  sure to check your spam folder and that your email address is
                  up to date in the account settings.
                </Container>
              ) : (
                <Container className={styles.toptext}>
                  If you forgot your password then we'll attempt to email you
                  instructions on how to reset it. If you don't receive the
                  email then try looking in your spam folder or allowing all
                  emails from memebook.com.
                </Container>
              )}

              {submit !== true && (
                <FormControl
                  id="username"
                  mb={3}
                  className={styles.input}
                  isRequired
                >
                  <Input
                    placeholder="Username"
                    name="username"
                    onChange={handleInput}
                    style={{ border: "0px" }}
                    value={username}
                  />
                </FormControl>
              )}
              {submit ? (
                <Link to="/login">
                  <button className={styles.btn}>
                    <strong>Go Back</strong>
                  </button>
                </Link>
              ) : (
                <button className={styles.btn} onClick={handleSubmit}>
                  <strong>Continue</strong>
                </button>
              )}
            </Box>
          </form>
        </Box>
      </div>
      <Flex style={{ justifyContent: "center", marginTop: "20px" }}>
        <Link to="#" style={{ fontSize: "12px", color: "#65666A" }}>
          © 2021 memebook.
        </Link>
      </Flex>
    </div>
  );
};

export default ForgotPassword;
