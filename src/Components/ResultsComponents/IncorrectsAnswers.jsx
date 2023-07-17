import { HStack, Text } from "@chakra-ui/react";

export const IncorrectsAnswers = ({ CorrectAnswer, QuestionNumber }) => {
  return (
    <HStack gap={2} w={"full"} mt={{ base: "10", sm: "0" }}>
      <Text
        as={"span"}
        w={10}
        h={10}
        p={2}
        rounded={"full"}
        textAlign={"center"}
        style={{ boxShadow: "-1px 1px 3px rgba(10, 182, 33, 0.39)" }}
      >
        {QuestionNumber}
      </Text>
      <Text
        as={"span"}
        px={10}
        py={2}
        rounded={"full"}
        fontSize={"sm"}
        textAlign={"center"}
        style={{ boxShadow: "1px 1px 5px rgba(10, 182, 33, 0.39)" }}
      >
        {CorrectAnswer}
      </Text>
    </HStack>
  );
};
