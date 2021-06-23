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
  InputRightAddon,
  InputGroup,
} from "@chakra-ui/react";
import styles from "./login.module.css";
import {
  FaArrowLeft,
  FaFacebookF,
  FaTwitter,
  FaApple,
  FaGoogle,
  FaYahoo,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState("");
  const [allInputs, setAllInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const toast = useToast();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = input;
    setAllInputs((prevInput) => ({
      ...prevInput,
      username,
      password,
    }));

    if (username === "" || password === "") {
      toast({
        title: "Error",
        description: "Input fields cannot be empty",
        status: "error",
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
        <Heading size="3xl" m={4}>
          memebook
        </Heading>

        <Box className={styles.register}>
          <Text
            fontSize="12px"
            style={{ textAlign: "center", marginTop: "30px" }}
          >
            Signin with
          </Text>
          <Flex className={styles.icons} justify="space-between">
            <FaFacebookF className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaApple className={styles.icon} />
            <FaGoogle className={styles.icon} />
            <FaYahoo className={styles.icon} />
          </Flex>
          <Text fontSize="12px" style={{ textAlign: "center" }}>
            or with memebook
          </Text>

          <form onSubmit={handleSubmit}>
            <Box className={styles.inputs}>
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
                />
              </FormControl>

              <FormControl
                id="password"
                mb={3}
                className={styles.input}
                isRequired
              >
                <InputGroup size="sm">
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInput}
                    style={{height: "40px", borderTopLeftRadius: "5px",borderBottomLeftRadius: "5px"}}
                  />
                  <InputRightAddon className={styles.addon} style={{height: "40px", borderTopRightRadius: "5px",borderBottomRightRadius: "5px"}}>
                    <Link to="/forgotpassword">forgot?</Link>
                  </InputRightAddon>
                </InputGroup>
              </FormControl>
            </Box>
          </form>
          <div className={styles.btnWrapper}>
            <button className={`${styles.btn} ${styles.signinBtn}`}>
              <Link to="/signup">need an account</Link>
            </button>
            <button
              className={styles.btn}
              style={{ backgroundColor: "#5C69FF" }}
              onClick={handleSubmit}
            >
              <Link to="/home">Sign In</Link>
            </button>
          </div>
        </Box>
      </div>
      <Flex style={{ margin: "120px 0px 20px 0px" }}>
        <a href="#" style={{ marginRight: "20px" }}>
          terms
        </a>
        <a href="#">privacy</a>
      </Flex>
    </div>
  );
};

export default Login;
