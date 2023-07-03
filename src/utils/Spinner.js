import React from "react";
import { Spinner, Center } from "@chakra-ui/react";

const Spin = () => {
  return (
    <div w="100%">
      <Center h="86vh">
        <Spinner
          size="xl"
          thickness="4px"
          speed="0.50s"
          emptyColor="gray.200"
          color="teal.500"
        />
      </Center>
    </div>
  );
};

export default Spin;
