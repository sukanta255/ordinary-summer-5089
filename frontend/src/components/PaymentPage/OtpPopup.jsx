import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpPopup = ({ otpData, isOpen, onClose }) => {
  const myNavi = useNavigate();

  const toast = useToast();

  const [pin1, setPin1] = useState(0);
  const [pin2, setPin2] = useState(0);
  const [pin3, setPin3] = useState(0);
  const [pin4, setPin4] = useState(0);

  const handleSubmit = async () => {
    let pinNum = `${otpData}`;

    let formPin = `${pin1}${pin2}${pin3}${pin4}`;

    let token = "Token ID: T-" + Math.random() * 100000000;

    if (pinNum === formPin) {
      toast({
        title: "Ordered Sucessfully",
        description: `${token}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        myNavi("/");
      }, 3000);
      onClose();
    } else {
      toast({
        title: "Failed",
        description: "Please Enter Valid OTP",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text p={"4"} align={"center"} fontSize={"lg"}>
              Enter the OTP (7557)
            </Text>
            <Flex justifyContent={"center"} gap={"4"} p={"6"}>
              <PinInput>
                <PinInputField value={pin1} onChange={(e) => setPin1(e.target.value)} borderColor={"blackAlpha.900"} borderRadius={"0px"} />
                <PinInputField value={pin2} onChange={(e) => setPin2(e.target.value)} borderColor={"blackAlpha.900"} borderRadius={"0px"} />
                <PinInputField value={pin3} onChange={(e) => setPin3(e.target.value)} borderColor={"blackAlpha.900"} borderRadius={"0px"} />
                <PinInputField value={pin4} onChange={(e) => setPin4(e.target.value)} borderColor={"blackAlpha.900"} borderRadius={"0px"} />
              </PinInput>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button w={"100%"} _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} color={"white"} bgColor={"black"} mr={3} onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OtpPopup;
