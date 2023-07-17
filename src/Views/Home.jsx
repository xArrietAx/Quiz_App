import { VStack, HStack, Heading, Text } from "@chakra-ui/react";
import { Username } from "../Components/SetUsername";
import { Creator } from "../Components/Creator";
import { ViewCode } from "../Components/ViewCode";

export const Home = () => {
  return (
    <VStack gap={14} >
      <VStack mt={3}>
        <Heading as={"h1"} textAlign={"center"} textColor={"gray.300"}>
          Explore the Football Universe
        </Heading>
        <Text
          as={"h2"}
          w={"75%"}
          fontWeight={"500"}
          textColor={"gray.500"}
          textAlign={"center"}
        >
          {" "}
          Join our thrilling quiz app! Challenge
          yourself, showcase your expertise, and have fun with our captivating
          questionnaire. Play it now and kick-start the excitement!
        </Text>
      </VStack>

      <HStack
        flexWrap={"wrap"}
        alignItems={"end"}
        justifyContent={"space-between"}
        gap={5}
        w={"90%"}
      >
        <Username />
        <Creator />
      </HStack>
      <ViewCode />
    </VStack>
  );
};
