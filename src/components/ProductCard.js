import React from "react";
import {
  Box,
  Heading,
  Image,
  Flex,
  Center,
  Spacer,
  Tag,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import ProductModal from "./ProductModal";

const ProductCard = ({ details }) => {
  const { itemname, amount, category, picture, type } = details;
  return (
    <Box
      p="2"
      width="28%"
      maxH="56"
      border="1px solid teal"
      borderRadius="lg"
      m="4"
      boxShadow="xl"
    >
      <Flex>
        <Center h="52" w="40%" mr="2">
          <Image
            src={picture}
            alt="product"
            borderRadius="md"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </Center>
        <Flex flexGrow="1" flexDirection="column">
          <VStack
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing="1"
          >
            <Heading fontSize="22px" mb="1">
              {itemname}
            </Heading>
            <Tag size="lg" variant="outline" borderRadius="full">
              <TagLabel>{category.toUpperCase()}</TagLabel>
            </Tag>
            <Heading
              style={{
                color: "teal",
              }}
              size="lg"
            >
              {type === "sell" ? `Rs. ${amount}` : "Donate"}
            </Heading>
          </VStack>
          <Spacer />
          <ProductModal details={details} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductCard;
