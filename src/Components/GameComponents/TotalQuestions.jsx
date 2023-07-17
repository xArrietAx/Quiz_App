import {Text} from '@chakra-ui/react'

export const TotalQuestions = ({TotalQuestions, QuestionNumber}) => {
  return (
    <Text fontFamily={"mono"} fontSize={{base:"3xl", sm:"4xl"}} textColor={"gray.700"}>
       {QuestionNumber} / {TotalQuestions}
    </Text>
  )
}
