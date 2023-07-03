import React, { useContext, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Button,
} from "@chakra-ui/react";
import { HiSearch, HiUserCircle, HiPlusCircle } from "react-icons/hi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = (props) => {
  const { logout } = useContext(AuthContext);
  const [isShown, setIsShown] = useState(false);

  return (
    <Box h="13vh" px="10" boxShadow="lg">
      <Flex py="5" justifyContent="space-between" alignItems="center" h="24">
        <Link to="/product">
          <Box
            width=""
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            outline="none"
          >
            <Image src={isShown ? "https://ik.imagekit.io/buybecho/Logo1Hover_33TS2pxmNC.png" : "https://ik.imagekit.io/buybecho/Logo1_f1JRmwbQM9.png"} h="100px" />
          </Box>
        </Link>
        <Box width="40%" ml="-10">
          <InputGroup size="lg" w="100%">
            <InputLeftElement
              pointerEvents="none"
              w="auto"
              ml="-1"
              color="gray.400"
              height="3.6rem"
              // eslint-disable-next-line react/no-children-prop
              children={<HiSearch fontSize="30" />}
            />
            <Input
              boxShadow="md"
              type="email"
              placeholder="Search for books, coolers and more"
              h="14"
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
            />
          </InputGroup>
        </Box>
        <Box>
          <HStack spacing="1">
            <NavLink to="/profile" activeClassName="activePage">
              <Button
                leftIcon={<HiUserCircle size="30px" color="#319795" />}
                colorScheme="teal"
                variant="ghost"
                size="lg"
                fontSize="1.2rem"
                h="14"
                style={{ outline: "none" }}
              >
                Profile
              </Button>
            </NavLink>
            <NavLink to="/addproduct" activeClassName="activePage">
              <Button
                leftIcon={<HiPlusCircle size="30px" color="#319795" />}
                colorScheme="teal"
                variant="ghost"
                size="lg"
                fontSize="1.2rem"
                h="14"
              >
                Sell/Donate
              </Button>
            </NavLink>
            <NavLink to="/" exact activeClassName="activePage">
              <Button
                leftIcon={<RiLogoutCircleLine size="30px" color="#319795" />}
                colorScheme="teal"
                variant="ghost"
                size="lg"
                fontSize="1.2rem"
                h="14"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </NavLink>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
