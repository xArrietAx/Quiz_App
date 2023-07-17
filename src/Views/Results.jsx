import { useContext } from "react";
import { Context } from "../Context/Context";
import { HStack, VStack, Text, Button } from "@chakra-ui/react";
import { CircularProgress } from "../Components/CircularProgress";
import Spinner from "../Components/Spinner";
import { IncorrectsAnswers } from "../Components/ResultsComponents/IncorrectsAnswers";
import { Link } from "react-router-dom";

export const Results = () => {
  const { Results } = useContext(Context);
  return (
    <>
      {Results !== null && (
        <HStack
        position={"relative"}
        bottom={3}
          flexDirection={{ base: "column", sm: "row" }}
          gap={4}
          w={"full"}
          textColor={"gray.400"}
        >
          <VStack gap={5} w={{ base: "100%", sm: "50%" }} >
            <Text
              as={"span"}
              w={"full"}
              fontWeight={"600"}
              fontFamily={"mono"}
              fontSize="lg"
            >
              Username:{" "}
              <Text as={"span"} fontSize=".9em">
                {Results.Username}
              </Text>
            </Text>
            <Text
              as={"span"}
              w={"full"}
              fontWeight={"600"}
              fontFamily={"mono"}
              fontSize="lg"
            >
              Total Questions:{" "}
              <Text as={"span"} fontSize=".9em">
                {" "}
                {Results.TotalQuestions}{" "}
              </Text>
            </Text>
            <Text
              as={"span"}
              w={"full"}
              fontWeight={"600"}
              fontFamily={"mono"}
              fontSize="lg"
            >
              Correct Answers:{" "}
              <Text as={"span"} fontSize=".9em">
                {Results.CorrectAnswers}
              </Text>
            </Text>

            <VStack
              placeContent={"center"}
              w={"full"}
            
              rounded={"full"}
            >
              <CircularProgress value={Results.Score} />
            </VStack>
          </VStack>

          <VStack w={"50%"}>
            {Results.CorrectAnswers !== Results.TotalQuestions && <Text as={"span"} my={6} fontSize={"lg"} fontWeight={"600"} textAlign={"center"} >Incorrect Answer</Text>}
            {Results.CorrectAnswers === Results.TotalQuestions ? (
              <VStack alignItems={"center"} justifyContent={"center"} mt={{base:"25px", sm:"0"}} >
                <Text textAlign={"center"} textColor={"white"} fontSize={{base:"xl", sm:"2xl"}}>Excellent!</Text>
                <i className="bi bi-trophy-fill" style={{fontSize:"25px",color:"yellow"}} ></i>
              </VStack>
            ) : Results.IncorrectAnswers.length === 0 ? (
              <VStack
                alignItems={"center"}
                justifyContent={"center"}
                h={"full"}
              >
                <Spinner />
              </VStack>
            ) :  
           <VStack gap={2} h={"210px"} p={3} rounded={"lg"} overflow={"auto"} style={{boxShadow:"1px 1px 5px rgba(10, 202, 33, 0.39)"}} >
            { Results.IncorrectAnswers.map((incorrectanswers, i) => {
              return <IncorrectsAnswers key={i + Math.random() + Date.now() } CorrectAnswer={incorrectanswers.correctAnswer} QuestionNumber={incorrectanswers.questionNumber} /> 
            })}
           </VStack>
            }
          </VStack>
        </HStack>
      )}
      <Button as={Link} to={"/"} fontSize={"xl"} textColor={"white"} bg={"rgb(7, 30, 19)"} shadow={"md"} _hover={{bg:"rgb(7, 26, 19)", textColor:"gray.500"}}><i className="bi bi-house"></i></Button>
    </>
  );
};