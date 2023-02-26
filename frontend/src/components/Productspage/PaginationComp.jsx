import React from "react";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import { MdNavigateNext, MdNavigateBefore, MdLastPage, MdFirstPage } from "react-icons/md";

const PaginationComp = ({page, setPage, count}) => {
  return (
    <>
      <Flex>
        <IconButton
          isDisabled={page === 1}
          onClick={() => setPage(1)}
          _hover={{ color: "Black", backgroundColor: "white" }}
          borderRadius={"0px"}
          bgColor={"blackAlpha.900"}
          color={"white"}
          icon={<MdFirstPage />}
        />
        <IconButton
          isDisabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          _hover={{ color: "Black", backgroundColor: "white" }}
          borderRadius={"0px"}
          bgColor={"blackAlpha.900"}
          color={"white"}
          icon={<MdNavigateBefore />}
        />
        <Button isDisabled _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"}>
          {page}
        </Button>
        <IconButton
          isDisabled={page === Math.floor(count / 25)}
          onClick={() => setPage((prev) => prev + 1)}
          _hover={{ color: "Black", backgroundColor: "white" }}
          borderRadius={"0px"}
          bgColor={"blackAlpha.900"}
          color={"white"}
          icon={<MdNavigateNext />}
        />
        <IconButton
          isDisabled={page === count}
          onClick={() => setPage(Math.floor(count / 25))}
          _hover={{ color: "Black", backgroundColor: "white" }}
          borderRadius={"0px"}
          bgColor={"blackAlpha.900"}
          color={"white"}
          icon={<MdLastPage />}
        />
      </Flex>
    </>
  );
};

export default PaginationComp;
