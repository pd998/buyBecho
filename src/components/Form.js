import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Input,
  Flex,
  Textarea,
  Select,
  Radio,
  RadioGroup,
  Button,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import ImageUploader from "react-images-upload";
import { useForm, Controller } from "react-hook-form";
import { storage } from "../firebase/firebase";
import axios from "axios";
import { BACKEND_URL } from "../Config";

const Form = () => {
  const defaultValues = {
    description: "",
    category: "",
    type: "donate",
    picture: "",
    condition: "",
  };

  const { handleSubmit, errors, register, control, reset, watch } = useForm({
    defaultValues,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState(true);
  let watchType = watch("type");
  const toast = useToast();

  const handleUploadIDCard = (file) => {
    return new Promise((resolve, reject) => {
      const uploadTask = storage.ref(`/images/${file.name}`).put(file);

      uploadTask.on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (err) => {
          reject(err);
        },
        () => {
          storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              resolve(fireBaseUrl);
            });
        }
      );
    });
  };

  const onSubmit = async (values, e) => {
    setIsSubmitting(true);
    let data = await handleUploadIDCard(values.picture[0]).then().catch();
    values.picture = data;
    values = {
      ...values,
      interested: 1,
    };
    axios
      .post(`${BACKEND_URL}/items`, values)
      .then(() => {
        reset(defaultValues);
        e.target.reset();
        setIsSubmitting(false);
        setPreview(false);
        toast({
          title: "Item added",
          description: "Item has been successfully added",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "bottom-right",
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box px="60" pt="5" h="87vh">
      <Heading size="3xl" style={{ color: "teal" }}>
        Add your item
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex justifyContent="space-between" mt="8">
          <VStack width="45%" spacing="5" align="start">
            <FormControl isInvalid={errors.itemname}>
              <Input
                placeholder="Item name"
                name="itemname"
                size="lg"
                boxShadow="md"
                ref={register({
                  required: "Item name is required",
                })}
              />
              <FormErrorMessage mr={2}>
                {errors.itemname && errors.itemname.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.description}>
              <Controller
                as={<Textarea placeholder="Item Description" boxShadow="md" />}
                name="description"
                control={control}
                register={register}
              />
              <FormErrorMessage mr={2}>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.category}>
              <Controller
                as={
                  <Select placeholder="Select category" boxShadow="md" h="14">
                    <option value="book">Book</option>
                    <option value="notes">Notes</option>
                    <option value="papers">Papers</option>
                    <option value="cooler">Cooler</option>
                    <option value="mattress">Mattress</option>
                    <option value="electornic item">Electronic item</option>
                    <option value="other">Other</option>
                  </Select>
                }
                name="category"
                control={control}
                register={register}
                rules={{ required: "Please select the category" }}
              />
              <FormErrorMessage mr={2}>
                {errors.category && errors.category.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.condition}>
              <Controller
                as={
                  <Select placeholder="Select condition" boxShadow="md" h="14">
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Poor">Poor</option>
                  </Select>
                }
                name="condition"
                control={control}
                register={register}
                rules={{ required: "Please select the item condition" }}
              />
              <FormErrorMessage mr={2}>
                {errors.condition && errors.condition.message}
              </FormErrorMessage>
            </FormControl>
          </VStack>
          <VStack width="45%" spacing="5" align="start">
            <Flex justifyContent="center">
              <FormControl isInvalid={errors.type} mt="4">
                <Controller
                  as={
                    <RadioGroup size="lg">
                      <Radio value="donate">Donate</Radio>
                      <Radio value="sell" pl="3">
                        Sell
                      </Radio>
                    </RadioGroup>
                  }
                  name="type"
                  control={control}
                  register={register}
                  rules={{ required: "Please select the selling type" }}
                />
                <FormErrorMessage mr={2}>
                  {errors.type && errors.type.message}
                </FormErrorMessage>
              </FormControl>
              {watchType === "sell" ? (
                <FormControl isInvalid={errors.amount}>
                  <Input
                    placeholder="Amount in Rs."
                    name="amount"
                    size="lg"
                    boxShadow="md"
                    ref={register({
                      required: "Item amount is required",
                    })}
                  />
                  <FormErrorMessage mr={2}>
                    {errors.amount && errors.amount.message}
                  </FormErrorMessage>
                </FormControl>
              ) : null}
            </Flex>
            <FormControl isInvalid={errors.picture}>
              <Controller
                as={
                  <ImageUploader
                    withIcon={true}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={1024000}
                    withPreview={preview}
                    singleImage={true}
                    buttonText="Upload image"
                    buttonStyles={{
                      backgroundColor: "teal",
                    }}
                  />
                }
                name="picture"
                control={control}
                register={register}
                rules={{ required: "Please upload picture of your item" }}
              />
              <FormErrorMessage mr={2}>
                {errors.picture && errors.picture.message}
              </FormErrorMessage>
            </FormControl>
          </VStack>
        </Flex>
        <Box display="flex" justifyContent="flex-end" mt="10">
          <Button
            colorScheme="teal"
            type="submit"
            size="lg"
            w="60"
            isLoading={isSubmitting}
            mb="10"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
