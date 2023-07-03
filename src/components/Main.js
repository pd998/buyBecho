import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import Spinner from "../utils/Spinner";
import axios from "axios";
import { BACKEND_URL } from "../Config";
import { useLocation } from "react-router-dom";

const Main = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  // const [filteredItems, setFilteredItems] = useState([]);
  const { pathname } = useLocation();

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchItems = async () => {
  //     const { data } = await axios.get(`${BACKEND_URL}/items`);
  //     setItems(data);
  //     setLoading(false);
  //   };
  //   fetchItems();
  // }, []);

  useEffect(() => {
    setLoading(true);
    const fetchItems = async () => {
      const { data } = await axios.get(`${BACKEND_URL}/items?q=${search}`);
      setItems(data);
      setLoading(false);
    };
    fetchItems();
  }, [search]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Flex
          px={pathname.split("/")[1] === "product" ? "10" : "1"}
          pt="5"
          h={pathname.split("/")[1] === "product" ? "86vh" : null}
          flexWrap="wrap"
          justifyContent="space-around"
          overflow="auto"
        >
          {items.map((item) => (
            <ProductCard details={item} key={item.id} />
          ))}
        </Flex>
      )}
    </>
  );
};

export default Main;
