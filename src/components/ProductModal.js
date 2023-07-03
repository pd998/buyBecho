import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Flex,
  Center,
  Heading,
  Text,
  Tag,
  Divider,
  TagLabel,
  VStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { useLocation } from "react-router-dom";

const ProductModal = ({ details }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();
  const cancelRef = React.useRef();
  const [show, setShow] = useState(false);
  const {
    itemname,
    amount,
    category,
    condition,
    description,
    picture,
    type,
    interested,
  } = details;

  return (
    <>
      {pathname.split("/")[1] === "profile" ? (
        <Button colorScheme="red" width="70%" ml="30%" onClick={onOpen}>
          Delete
        </Button>
      ) : (
        <Button colorScheme="teal" width="70%" ml="30%" onClick={onOpen}>
          Details
        </Button>
      )}

      {pathname.split("/")[1] === "profile" ? (
        <AlertDialog
          motionPreset="slideInBottom"
          isCentered
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete your product
              </AlertDialogHeader>

              <AlertDialogBody>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      ) : (
        <Modal isCentered onClose={onClose} size="xl" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody my="25px">
              <Flex>
                <Center h="19rem" w="14rem" mr="5">
                  <Image
                    src={picture}
                    alt="product"
                    borderRadius="md"
                    style={{
                      maxHeight: "100%",
                    }}
                  />
                </Center>
                <Flex
                  justifyContent="space-between"
                  flexDirection="column"
                  h="18.5rem"
                  flexGrow="1"
                >
                  <VStack spacing="1" align="flex-start">
                    <Tag size="lg" variant="outline" borderRadius="full">
                      <TagLabel>{category.toUpperCase()}</TagLabel>
                    </Tag>
                    <Heading fontSize="30px">{itemname}</Heading>
                    <Heading
                      style={{
                        color: "teal",
                      }}
                      size="lg"
                    >
                      {type === "sell" ? `Rs. ${amount}` : "Donate"}
                    </Heading>
                    <Divider orientation="horizontal" borderColor="gray.500" />
                    <Text>{description}</Text>
                    <Text fontSize="lg">
                      <span style={{ fontWeight: "bolder" }}>Condition :</span>{" "}
                      {condition}
                    </Text>
                  </VStack>
                  <VStack spacing="1" align="start">
                    <Button
                      leftIcon={<MdShoppingCart />}
                      colorScheme="teal"
                      variant="solid"
                      size="lg"
                      w="70%"
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      Interested to buy
                    </Button>
                    {show ? (
                      <Text style={{ color: "teal" }}>
                        {interested.toString() !== "1"
                          ? `${interested} users are interested.`
                          : `${interested} user is interested.`}
                      </Text>
                    ) : null}
                  </VStack>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ProductModal;
