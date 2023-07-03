import React from "react";
import {
  Input,
  Flex,
  Box,
  FormLabel,
  VStack,
  FormControl,
  Heading,
} from "@chakra-ui/react";

const AccountDetail = () => {
  return (
    <Box width="100%" flexGrow="1" p="5%">
      <Heading size="lg"> Account Details</Heading>
      <VStack width="50%" align="stretch" spacing="5" mt="8">
        <FormControl id="name">
          <FormLabel>Student name</FormLabel>
          <Input
            size="lg"
            value="Victoria Allan"
            readOnly
            borderColor="gray.400"
          />
        </FormControl>
        <Flex>
          <FormControl id="id" mr="5">
            <FormLabel>ID</FormLabel>
            <Input
              size="lg"
              value="201701001"
              borderColor="gray.400"
              readOnly
            />
          </FormControl>
          <FormControl id="room">
            <FormLabel>Room no.</FormLabel>
            <Input
              type="text"
              size="lg"
              value="A-101"
              borderColor="gray.400"
              readOnly
            />
          </FormControl>
        </Flex>
        <FormControl id="contact">
          <FormLabel>Contact no.</FormLabel>
          <Input
            type="email"
            size="lg"
            value="+91 9798521111"
            borderColor="gray.400"
            readOnly
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            size="lg"
            value="test@buybecho.com"
            borderColor="gray.400"
            readOnly
          />
        </FormControl>
      </VStack>
    </Box>
  );
};

export default AccountDetail;
