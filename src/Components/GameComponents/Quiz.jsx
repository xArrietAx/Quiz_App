import { VStack, HStack, Divider, Center } from "@chakra-ui/react";
import { Question } from "./Question";
import { Level } from "./Level";
import { Countdown } from "./CountDown";
import { TotalQuestions } from "./TotalQuestions";
import { Done } from "./Done";
import Grid from "./Grid";

export const Quiz = ({ Data }) => {
  return (
    <VStack gap={6} w={"full"} >
      <VStack gap={3} w={"full"}>
        <HStack
        flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"full"}
        >
          <TotalQuestions QuestionNumber={Data?.questionNumber} TotalQuestions={Data?.totalQuestions} />
          <HStack justifyContent={{base:"space-between", sm:"normal"}} gap={3} w={{base:"full", sm:"fit-content"}}>
            <Level Level={Data?.level} />
            <Center height="35px">
              <Divider orientation="vertical" display={{base:"none", sm:"block"}} />
            </Center>
            <Countdown />
          </HStack>
        </HStack>
        <Question Question={Data?.question} />
      </VStack>
     <Grid Data={Data} />
     <Done />
    </VStack>
  );
};
