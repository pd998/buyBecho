import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  VStack,
  Center,
} from "@chakra-ui/react";
import { NavLink, Route, Switch } from "react-router-dom";
import AccountDetails from "./AccountDetail";
import Conversation from "./Conversation";
import YourProduct from "./Main";

const Profile = ({ search }) => {
  return (
    <Box px="10" pt="5" h="87vh">
      <Flex>
        <VStack h="80vh" w="18%" align="stretch">
          <Box border="3px solid teal" px="5" boxShadow="lg">
            <Heading size="lg" style={{ color: "teal" }}>
              Hello,
              <div>Victoria Allan</div>
            </Heading>
          </Box>
          <Center
            fontSize="xl"
            flexGrow="1"
            style={{ background: "#B2F5EA", color: "#234E52" }}
            boxShadow="lg"
          >
            <NavLink to="/profile/accountdetails">
              <Text>Account details</Text>
            </NavLink>
          </Center>
          <Center
            fontSize="xl"
            flexGrow="1"
            style={{ background: "#B2F5EA", color: "#234E52" }}
            boxShadow="lg"
          >
            <NavLink to="/profile/conversation">
              <Text>Mode of Conversation</Text>
            </NavLink>
          </Center>
          <Center
            fontSize="xl"
            flexGrow="1"
            style={{ background: "#B2F5EA", color: "#234E52" }}
            boxShadow="lg"
          >
            <NavLink to="/profile/yourproduct">
              <Text>Your items</Text>
            </NavLink>
          </Center>
        </VStack>
        <Spacer />
        <Box
          border="1px solid"
          h="80vh"
          w="75%"
          flexGrow="1"
          overflow="auto"
          boxShadow="lg"
        >
          <Switch>
            <Route path="/profile/accountdetails">
              <AccountDetails />
            </Route>
            <Route path="/profile/conversation">
              <Conversation />
            </Route>
            <Route path="/profile/yourproduct">
              <YourProduct search={search} />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
