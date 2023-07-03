import React, { useState } from "react";
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
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { HiUser, HiLockClosed, HiOutlineMail } from "react-icons/hi";
import { FaIdBadge } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { MdPhoneInTalk } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { handleSubmit, errors, register } = useForm();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  function onSubmit(values) {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: `Welcome ${values.name}!`,
        description: `Please, login to use our services :)`,
        duration: 1500,
        isClosable: true,
        position: "top",
      });
      history.push("/");
    });
  }

  return (
    <Box p="3% 4%" w="50%">
      <Flex flexDirection="column" h="100%">
        <Box>
          <Heading color="teal.700" size="3xl">
            Sign up
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={5} mt="10" w="90%">
              <FormControl isInvalid={errors.name}>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    w="auto"
                    ml="-1"
                    color="gray.400"
                    height="14"
                    // eslint-disable-next-line react/no-children-prop
                    children={<HiUser fontSize="30" />}
                  />
                  <Input
                    boxShadow="md"
                    type="text"
                    placeholder="Student name"
                    h="14"
                    name="name"
                    ref={register({
                      required: true,
                    })}
                  />
                </InputGroup>
              </FormControl>
              <Flex>
                <FormControl isInvalid={errors.id}>
                  <InputGroup size="lg">
                    <InputLeftElement
                      pointerEvents="none"
                      w="auto"
                      ml="-1"
                      color="gray.400"
                      h="14"
                      // eslint-disable-next-line react/no-children-prop
                      children={<FaIdBadge fontSize="30" />}
                    />
                    <Input
                      boxShadow="md"
                      name="id"
                      type="text"
                      placeholder="ID"
                      h="14"
                      ref={register({
                        required: true,
                      })}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isInvalid={errors.room} ml="5">
                  <InputGroup size="lg">
                    <InputLeftElement
                      pointerEvents="none"
                      w="auto"
                      ml="-1"
                      color="gray.400"
                      h="14"
                      // eslint-disable-next-line react/no-children-prop
                      children={<ImHome fontSize="30" />}
                    />
                    <Input
                      boxShadow="md"
                      type="text"
                      placeholder="Room no."
                      name="room"
                      h="14"
                      ref={register({
                        required: true,
                      })}
                    />
                  </InputGroup>
                </FormControl>
              </Flex>

              <FormControl isInvalid={errors.mobile}>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    w="auto"
                    ml="-1"
                    color="gray.400"
                    h="14"
                    // eslint-disable-next-line react/no-children-prop
                    children={<MdPhoneInTalk fontSize="30" />}
                  />
                  <Input
                    boxShadow="md"
                    type="text"
                    placeholder="Mobile no."
                    h="14"
                    name="mobile"
                    ref={register({
                      required: true,
                    })}
                  />
                </InputGroup>
              </FormControl>

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
                      required: true,
                    })}
                  />
                </InputGroup>
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
                      required: true,
                    })}
                  />
                </InputGroup>
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
              Sign up
            </Button>
          </form>
        </Box>
        <Spacer />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box>
            <Text fontSize="xl">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Already have an account ? {"  "}
              <span
                style={{
                  color: "teal",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginLeft: "3px",
                }}
              >
                <Link to="/">Sign in</Link>
              </span>{" "}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup;
