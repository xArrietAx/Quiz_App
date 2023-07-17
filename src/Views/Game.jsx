import { useContext } from "react";
import { Context } from "../Context/Context";
import { VStack, Text } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { Quiz } from "../Components/GameComponents/Quiz";
import Spinner from "../Components/Spinner";

const Game = () => {
  
  const { currentQuestion } = useContext(Context);

  const { Data, Loading, Error } = useFetch(currentQuestion);

  if (Loading) {
    return (
      <VStack alignItems={"center"} justifyContent={"center"} h={"320"}>
        <Spinner />
      </VStack>
    );
  }

  if (Error) {
    return (
      <VStack alignItems={"center"} justifyContent={"center"} w={"full"} h={320} textAlign={"center"} >
        <Text fontWeight={"semibold"} textColor={"red.500"}>
        Error retrieving the questions, please try again later.
        </Text>
      </VStack>
    );
  }

  return Data !== null && <Quiz Data={Data} />;
};

export default Game