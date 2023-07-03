import React from "react";
import { Image, Flex, Box, Heading, Center } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";

const Home = () => {
  return (
    <Flex>
      <Box h="100vh" w="50%">
        <Box h="100vh" className="bgImage">
          <Center display="flex" flexDirection="column" pt="180px">
            <Image src="https://ik.imagekit.io/buybecho/Logo_WmyLwQ7OP.png" alt="logo" h="80%" w="60%" />
            <Heading size="xl" mt="-70px" ml="1">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              It's more than eBay to us !
            </Heading>
          </Center>
        </Box>
      </Box>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Signin />
        </Route>
      </Switch>
    </Flex>
  );
};

export default Home;
