import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"}>
      <Text as={"span"} fontSize={"2xl"} textColor={"gray.300"}>
        Soccer
        <Text as={"span"} textColor={"green.400"}>
          Quiz
        </Text>
      </Text>
    </Link>
  );
};