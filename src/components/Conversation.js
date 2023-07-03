import React from "react";
import {
  Box,
  Text,
  Flex,
  VStack,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";
import { ImHome } from "react-icons/im";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Conversation = () => {
  const toast = useToast();
  return (
    <Box flexGrow="1" p="5%">
      <Text fontSize="2xl" color="gray.500">
        Select the information you would like to share with the buyer
      </Text>
      <VStack align="start" spacing="6" mt="8" ml="8">
        <Checkbox size="lg" colorScheme="teal" defaultIsChecked>
          <Flex alignItems="center" ml="3">
            <ImHome />
            <Text fontSize="xl" ml="4">
              Room Number
            </Text>
          </Flex>
        </Checkbox>
        <Checkbox size="lg" colorScheme="teal">
          <Flex alignItems="center" ml="3">
            <HiOutlineMail />
            <Text fontSize="xl" ml="4">
              Email
            </Text>
          </Flex>
        </Checkbox>
        <Checkbox size="lg" colorScheme="teal">
          <Flex alignItems="center" ml="3">
            <MdPhoneInTalk />
            <Text fontSize="xl" ml="4">
              Contact Number
            </Text>
          </Flex>
        </Checkbox>
      </VStack>
      <Button
        size="lg"
        colorScheme="teal"
        variant="outline"
        mt="8"
        w="52"
        onClick={() => {
          toast({
            title: "Settings applied",
            description: "Your prefreance has been applied",
            status: "success",
            duration: 1500,
            isClosable: true,
            position: "bottom-right",
          });
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Conversation;
