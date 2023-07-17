import { useContext } from "react";
import { Context } from "../../Context/Context";
import { GridItem } from "@chakra-ui/react";

export const Options = ({ id, Options, TotalQuestions, i }) => {
  const {
    setCurrentQuestion,
    setUserAnswers,
    setDone,
    UserAnswers,
    isOpen,
  } = useContext(Context);

  async function NewQuestion(e) {
    if (UserAnswers.length >= TotalQuestions) return
    setUserAnswers([
      ...UserAnswers,
      {
        QuestionId: e.target.dataset.id,
        selectedAnswer: parseInt(e.target.dataset.index),
      },
    ]);
    setCurrentQuestion((prevQuestion) => {
      if (prevQuestion === TotalQuestions) {
        setDone(true)
        return TotalQuestions
      }
      return prevQuestion + 1;
    });
  }

  return (
    <GridItem
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      border={"2px"}
      borderColor={"gray.900"}
      rounded={"xl"} 
      fontSize={{base:"sm", sm:"md"}}
      fontWeight={"600"}
      textColor={"gray.400"}
      bg={"blackAlpha.600"}
      cursor={"pointer"}
      _disabled={isOpen}
      _hover={{ borderColor: "green.900" }}
      onClick={NewQuestion}
      data-id={id}
      data-index={i}
    >
      {Options}
    </GridItem>
  );
};
