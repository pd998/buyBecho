import React, { useState, useContext } from "react";
import {
  Flex,
  Box,
  Heading,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  Spacer,
  FormErrorMessage,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const history = useHistory();
  const { handleSubmit, errors, register } = useForm();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useContext(AuthContext);

  function onSubmit(values) {
    setIsSubmitting(true);
    // setTimeout(() => {
    login(values)
      .then(() => {
        setIsSubmitting(false);
        toast({
          title: "Welcome :)",
          description: "We are happy to see you again!",
          duration: 1600,
          isClosable: true,
          position: "top",
        });
        history.push("/product");
      })
      .catch((e) => {
        console.error(e);
        setIsSubmitting(false);
        toast({
          title: "Credentials are wrong!",
          description: "Please check the credentials again!",
          status: "error",
          duration: 1300,
          isClosable: true,
        });
      });
    // }, 1000);
  }

  return (
    <Box p="3% 4%" w="50%">
      <Flex flexDirection="column" h="100%">
        <Box>
          <Heading color="teal.700" size="3xl">
            Sign in
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={5} mt="12" w="90%">
              <FormControl isInvalid={errors.email}>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    w="auto"
                    ml="-1"
                    color="gray.400"
                    height="14"
                    // eslint-disable-next-line react/no-children-prop
                    children={<HiOutlineMail fontSize="30" />}
                  />
                  <Input
                    name="email"
                    boxShadow="md"
                    type="email"
                    placeholder="Email"
                    h="14"
                    ref={register({
                      required: "Email is required",
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.password}>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    w="auto"
                    ml="-1"
                    color="gray.400"
                    height="14"
                    // eslint-disable-next-line react/no-children-prop
                    children={<HiLockClosed fontSize="30" />}
                  />
                  <Input
                    name="password"
                    boxShadow="md"
                    type="password"
                    placeholder="Password"
                    h="14"
                    ref={register({
                      required: "Password is required",
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>

            <Button
              boxShadow="xl"
              mt="8"
              colorScheme="teal"
              size="lg"
              w="45%"
              h="14"
              isLoading={isSubmitting}
              type="submit"
            >
              Sign in
            </Button>
          </form>
        </Box>
        <Spacer />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box>
            <Text fontSize="xl">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account ? {"  "}
              <span
                style={{
                  color: "teal",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginLeft: "3px",
                }}
              >
                <Link to="/signup">Sign up</Link>
              </span>{" "}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signin;
